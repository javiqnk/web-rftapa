import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        status1:
          "bg-green-50 font-medium text-green-700",
        status2:
          "bg-yellow-50 font-medium text-yellow-700	",
        status3:
          "bg-blue-50 font-medium text-blue-700	",
        status5:
          "bg-green-50 font-medium text-green-700	",
        status6:
          "bg-red-50 font-medium text-red-700	",

        status5_np:
          "bg-green-50 font-medium text-green-700",
        status6_np:
          "bg-red-50 font-medium text-red-700",

        status4:
          "border-transparent bg-destructive text-destructive-foreground font-semibold",
        status9:
          "border-transparent bg-destructive text-destructive-foreground font-semibold",

        status12: // PENDIENTE REVISION CLUB
          "text-navy-700 bg-gray-100 font-medium text-gray-700 border",
        status13: // Pend. Val. Federación Antes Pago
          "bg-yellow-50 font-medium text-yellow-700 cursor-pointer	",
        status14: // PENDIENTE REVISION CLUB
          "bg-yellow-50 font-medium text-yellow-700 cursor-pointer	",
        status15: // Pend. Val. Federación Después Pago
          "bg-blue-50 font-medium text-blue-700 cursor-pointer	",
        status16: // TRAMITADA
          "bg-green-500 font-medium uppercase text-white",
        status17: // VALIDADA
          "bg-blue-500 font-medium uppercase text-white",
      },
    },
    defaultVariants: {
      variant: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: any) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
