<template>
    <FskNavbar
        :links="[
            { label: 'Works', url: '/works' },
            { label: 'About me', url: '/about' },
            { label: 'Skills', url: '/skills' },
            { label: 'Blog', url: '/blog' },
            { label: 'Contacts', url: '/contacts' },
        ]"
        :languages="[
            { label: 'EN', code: 'en'},
            { label: 'NL', code: 'nl'}
        ]"
        logo="/logo.svg"
    />

    <FskPageHeader
        :title="pageHeader.title"
        :sub-title="pageHeader.subtitle"
        :text="pageHeader.text"
        :items="pageHeader.items"
        :button-group="pageHeader.buttonGroup"
    />

    <FskContentBlock
        :title="contentBlock.title"
        :text="contentBlock.text"
        :button-group="contentBlock.items"
    />

    <FskCounterCollection />

    <div class="page-grid">
        <FskIconCarousel
            title="Stack i use"
            :items="iconCarousselOne"
        />

        <FskGitWidget />
    </div>

    <FskExperience
        :title="task"
        :items="experience"
    />

    <FskContentBlock
        title="My works"
        label="Contact with me"
        link="/"
    />

    <FskCardCollection
        :cards="cards"
    />

    <div class="page-row">
        <FskStepCollection
            title="How i work"
            button-text="contact with me"
            button-link="/contact"
            :items="steps"
        />

        <FskIconCarousel
            title="Industries served"
            :center-track="true"
            :items="iconCaroussel"
        />
    </div>

    <div class="page-grid">
        <FskCalculator
            title="Price calculator"
            text="Want a quick project estimate?"
            :project-options="projectOptions"
            :design-options="designOptions"
            :timeline-options="timelineOptions"
        />

        <FskFaqs
            :title="faqs.title"
            :items="faqs.items"
        />
    </div>

    <div>
        <slot />
    </div>
</template>
<script setup lang="ts">
import Bracket from '@/assets/icons/bracket.svg'
import Wand from '@/assets/icons/wand.svg'
import Startup from '@/assets/icons/startup.svg'
import NuxtLink from '#app/components/nuxt-link.js'
import FskContentBlock from "~/components/organisms/content-block/fsk-content-block.vue";
import FskNavbar from "~/components/organisms/navbar/fsk-navbar.vue";
import FskPageHeader from "~/components/organisms/headers/page-header/fsk-page-header.vue";
import FskCounterCollection from "~/components/organisms/counter-collection/fsk-counter-collection.vue";
import FskIconCarousel from "~/components/organisms/icon-carousel/fsk-icon-carousel.vue";
import Vue from '@/assets/icons/vue.svg'
import Nuxt from '@/assets/icons/nuxt.svg'
import Javascript from '@/assets/icons/javascript.svg'
import Typescript from '@/assets/icons/typescript.svg'
import Html from '@/assets/icons/html.svg'
import Css from '@/assets/icons/css.svg'
import Scss from '@/assets/icons/scss.svg'
import Figma from '@/assets/icons/figma.svg'
import Pinia from '@/assets/icons/pinia.svg'
import Slack from '@/assets/icons/slack.svg'
import Dt from '@/assets/icons/dt.svg'
import Leads from '@/assets/icons/leads.svg'
import FskExperience from "~/components/organisms/experience/fsk-experience.vue"
import FskGitWidget from "~/components/organisms/git-widget/fsk-git-widget.vue";
import FskStepCollection from "~/components/organisms/step-collection/fsk-step-collection.vue";
import FskCardCollection from "~/components/organisms/card-collection/fsk-card-collection.vue";

import Cart from '@/assets/icons/cart.svg'
import Estate from '@/assets/icons/estate.svg'
import Finance from '@/assets/icons/finance.svg'
import Health from '@/assets/icons/healthcare.svg'
import Marketing from '@/assets/icons/marketing.svg'
import Travel from '@/assets/icons/travel.svg'
import FskCalculator from "~/components/organisms/calculator/fsk-calculator.vue";
import FskFaqs from "~/components/organisms/FAQs/fsk-faqs.vue";

const projectOptions = [
    { value: '', label: 'Project Type' },
    { value: 'landing-page', label: 'Landing Page', minNumberOfPages: 1 },
    { value: 'corporate-website', label: 'Corporate Website', minNumberOfPages: 5 },
    { value: 'web-app', label: 'Web App', minNumberOfPages: 5 },
    { value: 'e-commerce', label: 'E-commerce', minNumberOfPages: 5 },
]

const designOptions = [
    { value: '', label: 'Design Availability' },
    { value: 'yes', label: 'I have ready designs' },
    { value: 'no', label: 'I need design and development' },
]

const timelineOptions = [
    { value: '', label: 'Timeline' },
    { value: 'urgent', label: 'Less than 1 month' },
    { value: 'fast', label: '1-2 months' },
    { value: 'flexible', label: 'FLexible' },
]

const pageHeader = {
    title: 'Frontend',
    subtitle: 'Developer',
    text: 'Who turns ideas into seamless digital experiences',
    items: [
        { icon: Bracket, label: 'Clean code' },
        { icon: Wand, label: 'Modern design' },
        { icon: Startup, label: 'High performance' },
    ],
    buttonGroup: [
        { icon: 'arrow-up-right', label: 'View my work', link: '/works', background: true, is: NuxtLink },
        { icon: 'download', label: 'Download cv', link: '/works', background: false, is: 'button' },
    ]
}

const contentBlock = {
    title: 'About me',
    text: 'Hey there, I’m Frank Struik — a frontend developer who believes websites should not only work but also feel good.\n' +
        'I’ve worked on projects big and small, from e-commerce platforms to storytelling websites, and I enjoy the challenge of turning abstract ideas into clean, functional code. My secret superpower? Writing code that future-me (and other developers) can actually read without crying.\n' +
        'When I’m not coding, you might find me experimenting with new tech, hunting for clever UI details online, or trying to convince people that dark mode really does make everything better.',
    items: [
        { icon: 'brand-github-filled', label: 'Github', link: '/works', background: false },
        { icon: 'brand-linkedin-filled', label: 'Linkedin', link: '/works', background: false },
        { icon: 'brand-x-filled', label: 'X', link: '/works', background: false },
    ]
}

const iconCaroussel = [
    { icon: Cart },
    { icon: Estate },
    { icon: Finance },
    { icon: Health },
    { icon: Marketing },
    { icon: Travel },
    { icon: Cart },
    { icon: Estate },
    { icon: Finance },
    { icon: Health },
    { icon: Marketing },
    { icon: Travel },
]

const iconCarousselOne = [
    { icon: Vue },
    { icon: Nuxt },
    { icon: Javascript },
    { icon: Typescript },
    { icon: Html },
    { icon: Css },
    { icon: Scss },
    { icon: Figma },
    { icon: Pinia },
    { icon: Slack },
]

const task = 'Mobile first';
const experience = [
    { logo: Dt, title: 'Frontend developer', name: 'Digital Thrust', date: 'Mar 2025 - Present', tasks: [{ task: 'Cross team collab'}, { task: 'Reuseable Components'}, { task: task}]},
    { logo: Leads, title: 'Frontend developer', name: 'Leads', date: 'Sept 2023 - Mar 2025', tasks: [{ task: 'UI Collaboration'}, { task: 'Responsive UI'}, { task: 'Code Maintenance'}]},
]

const cards = [
    { link: '/wmd.webp', image: 'wmd.webp', title: 'WijMakenDaken', year: '2022', items: [{ label: 'Nuxt' }, { label: 'Vue' }, { label: 'SCSS' }, { label: 'Animations' }] },
    { link: '/itnp.webp', image: 'itnp.webp', title: 'Italianopoli', year: '2022', items: [{ label: 'Nuxt' }, { label: 'Vue' }, { label: 'Performance Optimization' }] },
    { link: '/gls.webp', image: 'gls.webp', title: 'GianlucaStories', year: '2022', items: [{ label: 'Accessibility' }, { label: 'HTML5' }, { label: 'JavaScript' }] },
]

const steps = [
    { number: '01', title: 'Discovery & planning', text: 'I begin by reviewing the designs, clarifying requirements, and deciding on the best tools to bring the project to life.' },
    { number: '02', title: 'Development', text: 'Then I build dynamic, responsive, and pixel-perfect pages — always keeping performance and security in mind.' },
    { number: '03', title: 'Delivery & Support', text: 'Finally, I deliver clean, well-documented code and remain available for ongoing support and improvements.' }
]

const faqs = {
    title: 'F.A.Qs',
    items: [
        { title: 'How do we communicate during the project?', text: 'I’m focused mainly on development. But if you already have a design (Figma, Sketch, Adobe XD), I’ll bring it to life. If you need design support, I can also collaborate with designers from my network.' },
        { title: 'How do we communicate during the project?', text: 'I’m focused mainly on development. But if you already have a design (Figma, Sketch, Adobe XD), I’ll bring it to life. If you need design support, I can also collaborate with designers from my network.' },
        { title: 'How do we communicate during the project?', text: 'I’m focused mainly on development. But if you already have a design (Figma, Sketch, Adobe XD), I’ll bring it to life. If you need design support, I can also collaborate with designers from my network.' },
        { title: 'How do we communicate during the project?', text: 'I’m focused mainly on development. But if you already have a design (Figma, Sketch, Adobe XD), I’ll bring it to life. If you need design support, I can also collaborate with designers from my network.' },
        { title: 'How do we communicate during the project?', text: 'I’m focused mainly on development. But if you already have a design (Figma, Sketch, Adobe XD), I’ll bring it to life. If you need design support, I can also collaborate with designers from my network.' },
        { title: 'How do we communicate during the project?', text: 'I’m focused mainly on development. But if you already have a design (Figma, Sketch, Adobe XD), I’ll bring it to life. If you need design support, I can also collaborate with designers from my network.' }
    ]
}
</script>