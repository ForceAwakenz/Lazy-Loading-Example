import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TakeoutComponent } from "./takeout.component";

const routes: Routes = [
    {path: 'takeout', component: TakeoutComponent}
]

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TakeoutRoutingModule {}