import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

const materialscomponent=[
MatButtonModule,
MatAutocompleteModule,
MatBadgeModule,
MatIconModule,
MatButtonToggleModule,
MatProgressSpinnerModule,
MatProgressBarModule,
MatToolbarModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatDividerModule,
MatGridListModule,
MatExpansionModule,
MatCardModule,
MatTabsModule,
MatStepperModule,
MatInputModule,
MatCheckboxModule,
MatRadioModule,
]

@NgModule({
  imports: [materialscomponent],
  exports:[materialscomponent]
})
export class MaterialsModule { }
