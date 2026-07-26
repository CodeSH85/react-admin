import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Select } from '@/components/ui/select'
import { TextInput } from '@/components/ui/textInput'
import { MdHome } from 'react-icons/md'

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

  const [value, setValue] = useState<string | null>('test1')

  function handleValueChange(newValue: string | null) {
    setValue(newValue)
  }

  return (
    <div className="flex flex-col gap-md h-full">
      <div className="flex gap-md">
        <Button size='xs'>
          Test Button xs
        </Button>
        <Button size='sm'>
          Test Button sm
        </Button>
        <Button color='secondary'>
          Test Button md
        </Button>
        <Button color='error' size='lg'>
          Test Button lg
        </Button>
        <Button color='success' size='xl'>
          Test Button xl
        </Button>
        <Button disabled size='xl'>
          Test Button xl
        </Button>
        <Button variant='text' icon size='xl'>
          <MdHome className='text-xl'></MdHome>
        </Button>
        <Button rounded='full' size='xl'>
          <MdHome className='text-xl'></MdHome>
        </Button>
      </div>
      <div className="bg-bg-base-2 dark:bg-dark-bg-base-2 flex-1">
        {value || 'select a value'}
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
          value={value}
          disabled={form.isDisabled}
          label={'Select Label'}
          placeholder={'select placeholder'}
          readOnly={form.isReadonly}
          clearable
          items={
            [
              { label: 'test 1', value: 'test1' },
              { label: 'test 2', value: 'test2', disabled: true },
              { label: 'test 3', value: 'test3' },
              { label: 'test 4', value: 'test4' }
            ]
          }
          onValueChange={handleValueChange}
        >
        </Select>
      </div>
      <div className="">
        <TextInput
          clearable
        />
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
