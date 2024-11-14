export interface TNav { title: string; href: string; description: string }

export const Product: {
    title: string;
    nav: TNav[];
} = {
    title: "Product",
    nav: [
        {
          title: "Function 1",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Function 2",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Function 3",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Function 4",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Function 5",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Function 6",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]
}
    
export const Explore: {
    title: string;
    nav: TNav[];
} = {
    title: "Explore",
    nav: [
        {
            title: "Introduction",
            href: "/#introduction",
            description: "Overview of the project and its goals.",
        },
        {
            title: "Features",
            href: "/#features",
            description: "Key functions and technologies used in the glasses.",
        },
        {
            title: "Benefits",
            href: "/#benefits",
            description: "Advantages of the glasses compared to other solutions.",
        },
        {
            title: "How It Works",
            href: "/#how-it-works",
            description: "Explanation of how the glasses work with infographics or video.",
        },
        {
            title: "User Testimonials",
            href: "/#testimonials",
            description: "Reviews and stories from users who have tried the product.",
        },
        {
            title: "Team",
            href: "/#team",
            description: "Introduction of the team and their experience.",
        },
        {
            title: "Contact",
            href: "/#contact",
            description: "How to get in touch for more information or collaboration.",
        },
        {
            title: "FAQ",
            href: "/#faq",
            description: "Answers to frequently asked questions.",
        },
        {
            title: "News and Updates",
            href: "/#news",
            description: "Latest news about the product and future plans.",
        },
    ],
}

export const aboutUsNavs: TNav =
    {
        title: "About",
        href: "/aboutus",
        description: "Information about the company and its mission.",
    }

export const contactUsNav: TNav =
    {
        title: "Contact",
        href: "/#aContact",
        description: "Information about the company and its mission.",
    }

export default [
    Product,
    Explore,
    aboutUsNavs,
    contactUsNav,
]