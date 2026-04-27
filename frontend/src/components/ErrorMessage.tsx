import type React from "react"

// Creacion del type
type ErrorMessageProps = {
    children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className="text-red-600 text-sm">{children}</div>
  )
}
