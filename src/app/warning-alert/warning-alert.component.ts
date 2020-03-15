import { Component } from '@angular/core'

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is a warning Component</p>`,
  styles: [`
p{
  padding:20px;
  background-Color:mistyrose;
  border:1px solid red;
}
`]
})
export class WarningAlertComponent {
}
