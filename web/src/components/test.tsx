import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Select } from '@/components/ui/select'

const formFields = {
  isDisabled: false,
  isReadonly: false
}

export const TestComponent = () => {
  const [form, setForm] = useState(formFields)

  function setDisable(value: boolean) {
    setForm({
      ...form,
      isDisabled: value
    })
  }
  function setReadonly(value: boolean) {
    setForm({
      ...form,
      isReadonly: value
    })
  }

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
      <div className="flex items-center gap-md">
        <Checkbox
          label='Disable'
          checked={form.isDisabled}
          onCheckedChange={setDisable}
        />
        <Checkbox
          label='Readonly'
          checked={form.isReadonly}
          onCheckedChange={setReadonly}
        />
      </div>

      <div className="min-w-12">
        <Select
          disabled={form.isDisabled}
          placeholder={'select'}
          readonly={form.isReadonly}
          items={[
            { label: 'test', value: 'test' },
            { label: 'test 2', value: 'test2', disabled: true },
            { label: 'test 3', value: 'test4' },
            { label: 'test 4', value: 'test5' }
          ]}
        >
        </Select>
      </div>
      <Dialog
        description='This is Dialog'
        title='Dialog Title'
      >
        <Dialog.Trigger>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <div className='min-w-80 min-h-50'>Test</div>
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog>
    </div>
  )
}
