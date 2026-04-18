import { Button } from '@/components/ui/button'

export const TestComponent = () => {
  return (
    <div className="flex flex-col gap-md h-full">
      <div className="flex gap-md">
        <Button size='sm'>
          Test Button small
        </Button>
        <Button color='secondary'>
          Test Button 123
        </Button>
        <Button color='error'>
          Test Button 123
        </Button>
        <div className="bg-bg-base-1 dark:bg-dark-bg-base-1 p-md rounded-md">
          <p>123 Test</p>
        </div>
      </div>
      <div className="bg-bg-base-2 dark:bg-dark-bg-base-2 flex-1">
        Second Layer
      </div>
    </div>
  )
}
