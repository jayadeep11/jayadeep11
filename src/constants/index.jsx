import { SiNeovim } from "react-icons/si";
import { VscTerminal, VscTerminalTmux } from "react-icons/vsc";
import { SiArchlinux } from "react-icons/si";

export const navItems = [
    { label: "About", href: "#About" },
    { label: "Workflow", href: "#Arch" },
    { label: "Notes", href: "#Notes" },
    { label: "Contact", href: "#Contact" },
];

export const Programs = [
    {
        name: "Hyprland",
        icon: <SiArchlinux />,
        description:
            "Hyprland is my window manager, or basically “how I make my desktop look cool”. For my workflow, a tiling window manager is essential once you get over the learning curve. Hyprland uses Wayland and also has some nice animations",
    },
    {
        name: "Neovim",
        icon: <SiNeovim />,
        description:
            "I use neovim for all of my writing. vim notoriously has a steep learning curve, but as with most things, I think the payoff is worth it.",
    },
    {
        name: "Kitty",
        icon: <VscTerminal />,
        description:
            "I currently use kitty for my terminal due to its support for images in Wayland. It’s very customizable but still very fast. For my shell, I use zsh with a few plugins for niceties like syntax highlighting and auto-complete.",
    },
    {
        name: "Tmux",
        icon: <VscTerminalTmux />,
        description:
            "Tmux is a terminal multiplexer; it allows you to create several pseudo terminals from a single terminal. This is very useful for running multiple programs with a single connection, such as when you're remotely connecting to a machine using Secure Shell (SSH).",
    },
];

export const socials = [
    { label: "Instagram", href: "https://www.instagram.com/jayadeep__11/" },
    { label: "Twitter", href: "#Arch" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jayadeep11/" },
    { label: "Github", href: "https://github.com/jayaadeep11/" },
];

export const details = [
    { label: "+91 9705352421", href: "#Arch" },
    { label: "jayadeep.bellamkonda@gamil.com", href: "#" },
];
