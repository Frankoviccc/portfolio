import vue from '@/assets/icons/vue.svg'
import nuxt from '@/assets/icons/nuxt.svg'
import javascript from '@/assets/icons/javascript.svg'
import typescript from '@/assets/icons/typescript.svg'
import html from '@/assets/icons/html.svg'
import css from '@/assets/icons/css.svg'
import scss from '@/assets/icons/scss.svg'
import figma from '@/assets/icons/figma.svg'
import pinia from '@/assets/icons/pinia.svg'
import slack from '@/assets/icons/slack.svg'
import ubuntu from "@/assets/icons/ubuntu.svg"
import pruvious from "@/assets/icons/pruvious.svg"
import dt from "@/assets/icons/dt.svg"
import leads from "@/assets/icons/leads.svg"
import gls from "@/assets/icons/gls.svg"
import wmd from "@/assets/icons/wmd.svg"
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.vue";
import x from "@/assets/icons/x.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import copylink from "@/assets/icons/copy-link.svg";
import tailwind from "@/assets/icons/tailwind.svg";

export const iconMap: Record<string, string | Component> = {
    vue,
    nuxt,
    javascript,
    typescript,
    figma,
    scss,
    html,
    pinia,
    slack,
    css,
    ubuntu,
    pruvious,
    dt,
    leads,
    wmd,
    gls,
    github,
    linkedin,
    x,
    facebook,
    instagram,
    copylink,
    tailwind
}

export const getIcon = (name: string): string | Component | null => {
    return iconMap[name] || null
}