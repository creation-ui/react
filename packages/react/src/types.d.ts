import '@creation-ui/core'

declare module '@creation-ui/core' {
  type JSXNode = React.ReactNode
  type HTMLInputType = React.InputHTMLAttributes<HTMLInputElement>['type']
}
