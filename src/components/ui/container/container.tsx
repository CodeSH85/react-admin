export interface IContainerProps {
  className?: string
  children?: React.ReactNode
}

export const Container = (props: IContainerProps) => {
  const { children, className } = props

  const containerClassName = `
    min-h-full bg-bg-base-2 dark:bg-dark-bg-base-2 text-on-bg-base-2 dark:text-dark-on-bg-base-2 p-md
    ${className}
  `

  return (
    <div className={containerClassName}>
      {children}
    </div>
  )
}
