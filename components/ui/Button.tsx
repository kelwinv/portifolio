import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e62e62]/50 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        primary:
          "min-h-11 rounded-xl bg-[#e62e62] px-8 py-3 font-['Poppins:SemiBold',sans-serif] font-semibold text-white hover:bg-[#d12755]",
        "primary-montserrat":
          "min-h-11 rounded-xl bg-[#e62e62] px-8 py-3 text-center font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#ebe8ff] hover:bg-transparent hover:text-[#e62e62] hover:border-[#e62e62] border",
        outline:
          "min-h-11 rounded-xl border-2 border-[#e62e62] px-8 py-3 font-['Montserrat:Bold',sans-serif] font-bold text-[#e62e62] hover:bg-[#e62e62] hover:text-white",
        secondary:
          "min-h-11 flex-1 rounded-lg border border-[#0f0d1d]/30 px-4 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-[#0f0d1d] hover:border-[#0f0d1d]/60",
        "primary-sm":
          "min-h-11 flex-1 rounded-lg bg-[#e62e62] px-4 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-white hover:bg-[#d12755]",
        light:
          "min-w-[200px] gap-3 rounded-xl bg-white px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-lg text-[#0f0d1d] hover:bg-[#ebe8ff]",
        "primary-lg":
          "min-w-[200px] gap-3 rounded-xl bg-[#e62e62] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-lg text-white hover:bg-[#d12755]",
        ghost:
          "min-w-[200px] gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-lg text-white hover:bg-white/20",
        filter:
          "min-h-11 rounded-full px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-sm",
        icon: "h-11 w-11 shrink-0 rounded-lg hover:bg-black/5",
        "icon-inverse":
          "h-11 w-11 shrink-0 rounded-lg text-[#ebe8ff] hover:bg-white/10",
        nav: "relative gap-2 py-1 font-['Poppins:Regular',sans-serif] text-base duration-300",
        "nav-mobile":
          "min-h-11 w-full justify-start gap-3 rounded-lg px-4 py-3 text-left font-['Poppins:Regular',sans-serif] text-lg text-[#ebe8ff] hover:bg-white/10",
        "nav-accent":
          "mt-4 min-h-11 rounded-lg px-4 py-3 font-['Poppins:SemiBold',sans-serif] text-lg text-[#e62e62] hover:bg-white/10",
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "filter",
        active: true,
        class: "bg-[#0f0d1d] text-white",
      },
      {
        variant: "filter",
        active: false,
        class: "bg-[#ebe8ff] text-[#0f0d1d] hover:bg-[#d0cce9]",
      },
      {
        variant: "nav",
        active: true,
        class: "text-[#e62e62]",
      },
      {
        variant: "nav",
        active: false,
        class: "text-[#0f0d1d] hover:text-[#e62e62]/70",
      },
    ],
    defaultVariants: {
      variant: "primary",
      active: false,
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonBaseProps = ButtonVariantProps & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
    download?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return typeof (props as ButtonAsLink).href === "string";
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const { variant, active, className, children, ...rest } = props;

  const classes = cn(buttonVariants({ variant, active }), className);

  if (isLinkProps(props)) {
    const { href, external, download, ...anchorRest } = rest as Omit<
      ButtonAsLink,
      keyof ButtonBaseProps
    >;

    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    if (download) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          download
          className={classes}
          {...anchorRest}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as Omit<
    ButtonAsButton,
    keyof ButtonBaseProps
  >;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  );
});

export { buttonVariants };
