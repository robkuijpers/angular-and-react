import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import '@happynrwl/ui'; // <-- the new library
import { NxWelcomeComponent } from "./nx-welcome.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: "happynrwl-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = "angularapp";
}
