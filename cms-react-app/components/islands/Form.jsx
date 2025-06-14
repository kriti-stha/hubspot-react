import { Button } from '../ui/button.tsx'
import { Alert } from '../ui/alert.tsx'

import '../../styles/globals.css'

export default function Form() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">shadcn/ui Demo</h1>
      <Button variant="default" onClick={() => console.log('default button')}>
        Click Me
      </Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="">hi</Button>
      <Alert variant="destructive">waddup</Alert>
    </div>
  )
}
