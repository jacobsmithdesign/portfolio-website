import cx from 'classnames'

export const inputStyles = (isFullWidth: boolean, isTextArea: boolean, isInFooter: boolean, hasError: boolean) =>
  cx(
    'border-b bg-transparent w-full transition-[padding] h-[29px] min-h-[29px] overflow-y-auto max-h-[200px] rounded-none text-base leading-5 border-b-mid-grey',
    {
      'placeholder:text-light-grey border-light-grey': !isInFooter,
      'placeholder:text-grey text-white': isInFooter,
      'pb-4': !isTextArea,
      'lg:col-span-2': isFullWidth,
      'xxs:placeholder:text-red pl-10': hasError,
    }
  )

export const formFields = [
  {
    label: 'First Name',
    name: 'First Name',
    autocomplete: 'given-name',
    type: 'text',
  },
  {
    label: 'Last Name',
    name: 'Last Name',
    autocomplete: 'family-name',
    type: 'text',
  },
  {
    label: 'Contact number',
    name: 'Contact number',
    autocomplete: 'tel',
    type: 'tel',
    isFullWidth: true,
  },
  {
    label: 'Email Address',
    name: 'Email Address',
    autocomplete: 'email',
    type: 'email',
    isFullWidth: true,
  },
  {
    label: 'Enquiry',
    name: 'Enquiry',
    autocomplete: 'off',
    type: 'textarea',
    isFullWidth: true,
  },
]
