<template>
    <div
        ref="container"
        class="distortion-image"
    >
        <img
            ref="image"
            src="/portret.jpeg"
            alt=""
        >
    </div>
</template>

<script setup>
import { Renderer, Vec2, Vec4, Geometry, Texture, Program, Mesh, Flowmap } from "ogl";

const container = ref(null)
const image = ref(null)

async function loadShader(url) {
    const response = await fetch(url);
    return response.text();
}

const _size = [2000, 2500];

let aspect = 1;
const mouse = new Vec2(-1);
const velocity = new Vec2();
let lastTime;
const lastMouse = new Vec2();

function updateMouse(e, rect) {
    e.preventDefault();

    let x, y;

    if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].pageX - rect.left;
        y = e.changedTouches[0].pageY - rect.top;
    } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }

    mouse.set(x / rect.width, 1.0 - y / rect.height);

    if (!lastTime) {
        lastTime = performance.now();
        lastMouse.set(x, y)
    }

    const deltaX = x - lastMouse.x;
    const deltaY = y - lastMouse.y;

    lastMouse.set(x, y);

    const time = performance.now();
    const delta = Math.max(10.4, time - lastTime);
    lastTime = time;
    velocity.x = deltaX / delta;
    velocity.y = deltaY / delta;
    velocity.needsUpdate = true
}

onMounted(async () => {
    const vertexShader = await loadShader("/shaders/vertexShader.glsl");
    const fragmentShader = await loadShader("/shaders/fragmentShader.glsl");

    const renderer = new Renderer({ dpr: 2 });
    const gl = renderer.gl;

    container.value.appendChild(gl.canvas);

    const flowmap = new Flowmap(gl, {
        falloff: 0.3,
        dissipation: 0.92,
        alpha: 0.5
    })

    const geometry = new Geometry(gl, {
        position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
        },
        uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    });

    const texture = new Texture(gl, {
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
    })

    if (image.value.complete && image.value.naturalHeight !== 0) {
        texture.image = image.value
    } else {
        image.value.onload = () => {
            texture.image = image.value
        }
    }

    const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
            uTime: { value: 0 },
            tWater: { value: texture },
            res: {
                value: new Vec4(window.innerWidth, window.innerHeight, 1, 2)
            },
            tFlow: flowmap.uniform
        }
    })

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
        const rect = image.value.getBoundingClientRect();
        gl.canvas.width = rect.width * 2.0;
        gl.canvas.height = rect.height * 2.0;
        gl.canvas.style.width = `${rect.width}px`;
        gl.canvas.style.height = `${rect.height}px`;

        const imageAspect = _size[0] / _size[1];
        const canvasAspect = rect.width / rect.height;

        let a1, a2;

        if (canvasAspect > imageAspect) {
            a1 = imageAspect / canvasAspect;
            a2 = 1.0
        } else {
            a1 = 1.0
            a2 = canvasAspect / imageAspect;
        }

        mesh.program.uniforms.res.value = new Vec4(rect.width, rect.height, a1, a2);

        renderer.setSize(rect.width, rect.height);
        aspect = rect.width / rect.height;
    }

    window.addEventListener("resize", resize, false);
    resize()

    const isTouchCapable = "ontouchstart" in window;
    const target = gl.canvas;

    if (isTouchCapable) {
        target.addEventListener("touchstart", (e) => updateMouse(e, target.getBoundingClientRect()), false);
        target.addEventListener("touchmove", (e) => updateMouse(e, target.getBoundingClientRect()), { passive: false })
    } else {
        target.addEventListener("mousemove", (e) => updateMouse(e, target.getBoundingClientRect()), false)
    }

    function update(t) {
        requestAnimationFrame(update);

        if (!velocity.needsUpdate) {
            mouse.set(-1);
            velocity.set(0);
        }
        velocity.needsUpdate = false

        flowmap.mouse.copy(mouse)
        flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
        flowmap.update();

        program.uniforms.uTime.value = t / 0.01;
        renderer.render({ scene: mesh });
    }

    requestAnimationFrame(update)
})
</script>

<style lang="scss">
@use 'fsk-distortion-image';
</style>