import { NgModule } from "@angular/core";
import { TakeoutRoutingModule } from "./takeout-routing.module";
import { TakeoutComponent } from "./takeout.component";


@NgModule ({
    declarations: [TakeoutComponent],
    imports: [TakeoutRoutingModule],
    exports: [TakeoutComponent]
})

export class TakoutModule {}