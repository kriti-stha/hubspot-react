import { Island } from '@hubspot/cms-components'
import { ModuleFields, TextField } from '@hubspot/cms-components/fields'
import LogbookFetch from '../../islands/Logbook.jsx?island'

export const meta = {
  label: 'My Logbook',
  icon: 'text',
}

export const fields = (
  <ModuleFields>
    <TextField name="logbook" label="logbook" default="logbook" />
  </ModuleFields>
)

export function Component() {
  return (
    <div>
      <Island module={LogbookFetch} />
    </div>
  )
}
