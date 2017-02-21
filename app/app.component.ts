import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    styles: [`

  `],
    template: `

    <h2>Template form</h2>
    <template-form></template-form>

    <h2>Reactive form</h2>
    <reactive-form></reactive-form>
  `
})
export class AppComponent {
    message = "This is the sample message.";
}
