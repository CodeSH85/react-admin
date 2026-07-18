import { createContext, useContext } from 'react'
import { Dialog as RawDialog } from '@base-ui/react/dialog'
import { Icon } from '../icon'

interface IDialogBasicProps {
  description?: string
  overlay?: boolean
  closeOnClickOutside?: boolean
  title?: string
  children?: React.ReactNode
}

const DialogContext = createContext({
  title: undefined,
  overlay: false,
  description: null,
  closeOnClickOutside: false
})

export const DialogTrigger = (props) => {
  const {
    children
  } = props

  return (
    <>
      {
        children
          ? children
          : <RawDialog.Close>
            Close
          </RawDialog.Close>
      }
    </>
  )
}

interface IDialogHeaderProps {
  title?: string
  children?: React.ReactNode
}

export const DialogHeader = (props: IDialogHeaderProps) => {

  const { children } = props

  const { title } = useContext(DialogContext)

  return (
    <RawDialog.Title>
      {
        children
          ? children
          :
          <div className='flex items-center'>
            {title && <p>{ title }</p>}
            <div className='flex-1' />
            <RawDialog.Close>
              <Icon name='mdiClose'/>
            </RawDialog.Close>
          </div>
      }
    </RawDialog.Title>
  )
}

export const DialogDescription = (props) => {
  const {
    children
  } = props

  const { description } = useContext(DialogContext)

  return (
    <RawDialog.Description>
      {
        children
          ? children
          : description
      }
    </RawDialog.Description>
  )
}

export const DialogContent = (props) => {
  const {
    children
  } = props

  const { overlay, description } = useContext(DialogContext)

  const dialogContentClassName = `
    fixed text-on-base-bg-1 dark:text-dark-on-bg-base-1
    bg-bg-base-2 dark:bg-dark-bg-base-2 w-90vw top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-md rounded-md
  `

  const dialogOverlayClassName = `
    bg-black opacity-50 fixed inset-0
  `

  return (
    <RawDialog.Portal>
      { overlay && <RawDialog.Backdrop className={dialogOverlayClassName}/> }
      <RawDialog.Popup
        className={dialogContentClassName}
      >
        <DialogHeader></DialogHeader>
        { description && <DialogDescription /> }
        { children }
      </RawDialog.Popup>
    </RawDialog.Portal>
  )
}

export const DialogFooter = (props) => {
  const {
    children
  } = props

  return (
    children
      ? children
      :
      <div className='flex items-center justify-end gap-2'>
        <RawDialog.Close>
          Cancel
        </RawDialog.Close>
        <RawDialog.Close>
          ok
        </RawDialog.Close>
      </div>
  )
}

export const Dialog = (props: IDialogBasicProps) => {
  const {
    children,
    overlay = true,
    title,
    description,
    closeOnClickOutside = true
  } = props

  const dialogContextValue = {
    title,
    description,
    overlay,
    closeOnClickOutside
  }

  return (
    <DialogContext.Provider value={dialogContextValue}>
      <RawDialog.Root>
        { children }
      </RawDialog.Root>
    </DialogContext.Provider>
  )
}

Dialog.Trigger = DialogTrigger
Dialog.Description = DialogDescription
Dialog.Header = DialogHeader
Dialog.Content = DialogContent
Dialog.Footer = DialogFooter
