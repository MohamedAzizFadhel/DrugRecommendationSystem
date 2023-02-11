import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAVKComponent } from './dialog-avk/dialog-avk.component';
import { DialogAodComponent } from './dialog-aod/dialog-aod.component';
import { DialogAapComponent } from './dialog-aap/dialog-aap.component';
import { DialogAvkProgrammeComponent } from './dialog-avk-programme/dialog-avk-programme.component';
import { DialogAvkProgrammeRisqueComponent } from './dialog-avk-programme-risque/dialog-avk-programme-risque.component';
import { DialogAvkProgrammeRisqueFaibleComponent } from './dialog-avk-programme-risque-faible/dialog-avk-programme-risque-faible.component';
import { DialogAvkProgrammeRisqueFaibleRes1Component } from './dialog-avk-programme-risque-faible-res1/dialog-avk-programme-risque-faible-res1.component';
import { DialogAvkProgrammeRisqueFaibleRes2Component } from './dialog-avk-programme-risque-faible-res2/dialog-avk-programme-risque-faible-res2.component';
import { DialogAvkProgrammeRisqueEndoComponent } from './dialog-avk-programme-risque-endo/dialog-avk-programme-risque-endo.component';
import { DialogAvkProgrammeRisqueEndoFaibleComponent } from './dialog-avk-programme-risque-endo-faible/dialog-avk-programme-risque-endo-faible.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrComponent } from './dialog-avk-programme-risque-endo-faible-inr/dialog-avk-programme-risque-endo-faible-inr.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent } from './dialog-avk-programme-risque-endo-faible-inr-oui/dialog-avk-programme-risque-endo-faible-inr-oui.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent } from './dialog-avk-programme-risque-endo-faible-inr-oui-res/dialog-avk-programme-risque-endo-faible-inr-oui-res.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrNonComponent } from './dialog-avk-programme-risque-endo-faible-inr-non/dialog-avk-programme-risque-endo-faible-inr-non.component';
import { DialogAvkProgrammeRisqueEndoElComponent } from './dialog-avk-programme-risque-endo-el/dialog-avk-programme-risque-endo-el.component';
import { DialogAvkProgrammeRisqueEndoElOuiComponent } from './dialog-avk-programme-risque-endo-el-oui/dialog-avk-programme-risque-endo-el-oui.component';
import { DialogAvkProgrammeRisqueEndoElOuiResComponent } from './dialog-avk-programme-risque-endo-el-oui-res/dialog-avk-programme-risque-endo-el-oui-res.component';
import { DialogAvkProgrammeRisqueEndoElNonComponent } from './dialog-avk-programme-risque-endo-el-non/dialog-avk-programme-risque-endo-el-non.component';
import { DialogAvkProgrammeOraleComponent } from './dialog-avk-programme-orale/dialog-avk-programme-orale.component';
import { DialogAvkProgrammeOraleRisqueComponent } from './dialog-avk-programme-orale-risque/dialog-avk-programme-orale-risque.component';
import { DialogAvkProgrammeOraleRisqueFaibleComponent } from './dialog-avk-programme-orale-risque-faible/dialog-avk-programme-orale-risque-faible.component';
import { DialogAvkProgrammeOraleRisqueFaibleInrComponent } from './dialog-avk-programme-orale-risque-faible-inr/dialog-avk-programme-orale-risque-faible-inr.component';
import { DialogAvkProgrammeOraleRisqueFaibleInrResComponent } from './dialog-avk-programme-orale-risque-faible-inr-res/dialog-avk-programme-orale-risque-faible-inr-res.component';
import { DialogAvkProgrammeOraleRisqueElComponent } from './dialog-avk-programme-orale-risque-el/dialog-avk-programme-orale-risque-el.component';
import { DialogAvkProgrammeOraleRisqueCritiqueComponent } from './dialog-avk-programme-orale-risque-critique/dialog-avk-programme-orale-risque-critique.component';
import { DialogAvkProgrammeOraleRisqueElRisqueComponent } from './dialog-avk-programme-orale-risque-el-risque/dialog-avk-programme-orale-risque-el-risque.component';
import { DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent } from './dialog-avk-programme-orale-risque-el-risque-faible/dialog-avk-programme-orale-risque-el-risque-faible.component';
import { DialogAvkProgrammeOraleRisqueElRisqueElComponent } from './dialog-avk-programme-orale-risque-el-risque-el/dialog-avk-programme-orale-risque-el-risque-el.component';
import { DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent } from './dialog-avk-programme-orale-risque-el-risque-el-oui/dialog-avk-programme-orale-risque-el-risque-el-oui.component';
import { DialogAvkProgrammeOraleRisqueElRisqueElNonComponent } from './dialog-avk-programme-orale-risque-el-risque-el-non/dialog-avk-programme-orale-risque-el-risque-el-non.component';
import { DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent } from './dialog-avk-programme-orale-risque-el-risque-el-oui-res/dialog-avk-programme-orale-risque-el-risque-el-oui-res.component';
import { DialogAvkHemmoragieComponent } from './dialog-avk-hemmoragie/dialog-avk-hemmoragie.component';
import { DialogAvkNonprogrammeComponent } from './dialog-avk-nonprogramme/dialog-avk-nonprogramme.component';
import { DialogAvkNonprogrammeFaibleComponent } from './dialog-avk-nonprogramme-faible/dialog-avk-nonprogramme-faible.component';
import { DialogAvkNonprogrammeEleveeComponent } from './dialog-avk-nonprogramme-elevee/dialog-avk-nonprogramme-elevee.component';
import { DialogAvkNonprogrammeFaibleResComponent } from './dialog-avk-nonprogramme-faible-res/dialog-avk-nonprogramme-faible-res.component';
import { DialogAvkNonprogrammeEleveeResComponent } from './dialog-avk-nonprogramme-elevee-res/dialog-avk-nonprogramme-elevee-res.component';
import { DialogAvkNonprogrammeEleveeResUrgentComponent } from './dialog-avk-nonprogramme-elevee-res-urgent/dialog-avk-nonprogramme-elevee-res-urgent.component';
import { DialogAvkNonprogrammeEleveeResSemiurgentComponent } from './dialog-avk-nonprogramme-elevee-res-semiurgent/dialog-avk-nonprogramme-elevee-res-semiurgent.component';
import { DialogAodProgrammeComponent } from './dialog-aod-programme/dialog-aod-programme.component';
import { DialogAodProgrammeRisqueComponent } from './dialog-aod-programme-risque/dialog-aod-programme-risque.component';
import { DialogAodProgrammeRisqueFaibleComponent } from './dialog-aod-programme-risque-faible/dialog-aod-programme-risque-faible.component';
import { DialogAodProgrammeRisqueInterComponent } from './dialog-aod-programme-risque-inter/dialog-aod-programme-risque-inter.component';
import { DialogAodProgrammeRisqueMajComponent } from './dialog-aod-programme-risque-maj/dialog-aod-programme-risque-maj.component';
import { DialogAodProgrammeRisqueInterXabanComponent } from './dialog-aod-programme-risque-inter-xaban/dialog-aod-programme-risque-inter-xaban.component';
import { DialogAodProgrammeRisqueInterDabiComponent } from './dialog-aod-programme-risque-inter-dabi/dialog-aod-programme-risque-inter-dabi.component';
import { DialogAodProgrammeRisqueInterXabanOuiComponent } from './dialog-aod-programme-risque-inter-xaban-oui/dialog-aod-programme-risque-inter-xaban-oui.component';
import { DialogAodProgrammeRisqueInterXabanNonComponent } from './dialog-aod-programme-risque-inter-xaban-non/dialog-aod-programme-risque-inter-xaban-non.component';
import { DialogAodProgrammeRisqueInterXabanClairComponent } from './dialog-aod-programme-risque-inter-xaban-clair/dialog-aod-programme-risque-inter-xaban-clair.component';
import { DialogAodProgrammeRisqueInterDabiClairComponent } from './dialog-aod-programme-risque-inter-dabi-clair/dialog-aod-programme-risque-inter-dabi-clair.component';
import { DialogAodProgrammeRisqueInterDabiClairOuiComponent } from './dialog-aod-programme-risque-inter-dabi-clair-oui/dialog-aod-programme-risque-inter-dabi-clair-oui.component';
import { DialogAodProgrammeRisqueInterDabiClairEntreComponent } from './dialog-aod-programme-risque-inter-dabi-clair-entre/dialog-aod-programme-risque-inter-dabi-clair-entre.component';
import { DialogAodProgrammeRisqueMajAccuComponent } from './dialog-aod-programme-risque-maj-accu/dialog-aod-programme-risque-maj-accu.component';
import { DialogAodProgrammeRisqueMajAccuNonComponent } from './dialog-aod-programme-risque-maj-accu-non/dialog-aod-programme-risque-maj-accu-non.component';
import { DialogAodProgrammeRisqueMajAccuOuiComponent } from './dialog-aod-programme-risque-maj-accu-oui/dialog-aod-programme-risque-maj-accu-oui.component';
import { DialogAodEndoComponent } from './dialog-aod-endo/dialog-aod-endo.component';
import { DialogAodOraleComponent } from './dialog-aod-orale/dialog-aod-orale.component';
import { DialogAodNonprogrammeComponent } from './dialog-aod-nonprogramme/dialog-aod-nonprogramme.component';
import { DialogAodAigueComponent } from './dialog-aod-aigue/dialog-aod-aigue.component';
import { DialogAodEndoRisqueComponent } from './dialog-aod-endo-risque/dialog-aod-endo-risque.component';
import { DialogAodEndoRisqueFaibleComponent } from './dialog-aod-endo-risque-faible/dialog-aod-endo-risque-faible.component';
import { DialogAodEndoRisqueEleveComponent } from './dialog-aod-endo-risque-eleve/dialog-aod-endo-risque-eleve.component';
import { DialogAodEndoRisqueEleveTypeComponent } from './dialog-aod-endo-risque-eleve-type/dialog-aod-endo-risque-eleve-type.component';
import { DialogAodEndoRisqueEleveTypeXabanComponent } from './dialog-aod-endo-risque-eleve-type-xaban/dialog-aod-endo-risque-eleve-type-xaban.component';
import { DialogAodEndoRisqueEleveTypeDabiComponent } from './dialog-aod-endo-risque-eleve-type-dabi/dialog-aod-endo-risque-eleve-type-dabi.component';
import { DialogAodEndoRisqueEleveTypeDabiClairComponent } from './dialog-aod-endo-risque-eleve-type-dabi-clair/dialog-aod-endo-risque-eleve-type-dabi-clair.component';
import { DialogAodEndoRisqueEleveTypeDabiClairEntreComponent } from './dialog-aod-endo-risque-eleve-type-dabi-clair-entre/dialog-aod-endo-risque-eleve-type-dabi-clair-entre.component';
import { DialogAodEndoRisqueEleveTypeDabiClairSupComponent } from './dialog-aod-endo-risque-eleve-type-dabi-clair-sup/dialog-aod-endo-risque-eleve-type-dabi-clair-sup.component';
import { DialogAodOraleRisqueComponent } from './dialog-aod-orale-risque/dialog-aod-orale-risque.component';
import { DialogAodOraleRisqueFaibleComponent } from './dialog-aod-orale-risque-faible/dialog-aod-orale-risque-faible.component';
import { DialogAodOraleRisqueEleveComponent } from './dialog-aod-orale-risque-eleve/dialog-aod-orale-risque-eleve.component';
import { DialogAodOraleRisqueCritiqueComponent } from './dialog-aod-orale-risque-critique/dialog-aod-orale-risque-critique.component';
import { DialogAodOraleRisqueEleveTypeComponent } from './dialog-aod-orale-risque-eleve-type/dialog-aod-orale-risque-eleve-type.component';
import { DialogAodOraleRisqueEleveTypeXabanComponent } from './dialog-aod-orale-risque-eleve-type-xaban/dialog-aod-orale-risque-eleve-type-xaban.component';
import { DialogAodOraleRisqueEleveTypeDabiComponent } from './dialog-aod-orale-risque-eleve-type-dabi/dialog-aod-orale-risque-eleve-type-dabi.component';
import { DialogAodOraleRisqueEleveTypeXabanClairComponent } from './dialog-aod-orale-risque-eleve-type-xaban-clair/dialog-aod-orale-risque-eleve-type-xaban-clair.component';
import { DialogAodOraleRisqueEleveTypeDabiRisqueComponent } from './dialog-aod-orale-risque-eleve-type-dabi-risque/dialog-aod-orale-risque-eleve-type-dabi-risque.component';
import { DialogAodNonprogrammeDabiComponent } from './dialog-aod-nonprogramme-dabi/dialog-aod-nonprogramme-dabi.component';
import { DialogAodNonprogrammeXabanComponent } from './dialog-aod-nonprogramme-xaban/dialog-aod-nonprogramme-xaban.component';
import { DialogAodNonprogrammeDabiRisqueComponent } from './dialog-aod-nonprogramme-dabi-risque/dialog-aod-nonprogramme-dabi-risque.component';
import { DialogAodNonprogrammeDabiRisqueTresComponent } from './dialog-aod-nonprogramme-dabi-risque-tres/dialog-aod-nonprogramme-dabi-risque-tres.component';
import { DialogAodNonprogrammeDabiRisqueEleveComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve/dialog-aod-nonprogramme-dabi-risque-eleve.component';
import { DialogAodNonprogrammeDabiRisqueFaibleComponent } from './dialog-aod-nonprogramme-dabi-risque-faible/dialog-aod-nonprogramme-dabi-risque-faible.component';
import { DialogAodNonprogrammeDabiRisqueTresConcComponent } from './dialog-aod-nonprogramme-dabi-risque-tres-conc/dialog-aod-nonprogramme-dabi-risque-tres-conc.component';
import { DialogAodNonprogrammeDabiRisqueTresConcNonComponent } from './dialog-aod-nonprogramme-dabi-risque-tres-conc-non/dialog-aod-nonprogramme-dabi-risque-tres-conc-non.component';
import { DialogAodNonprogrammeDabiRisqueTresConcOuiComponent } from './dialog-aod-nonprogramme-dabi-risque-tres-conc-oui/dialog-aod-nonprogramme-dabi-risque-tres-conc-oui.component';
import { DialogAodNonprogrammeDabiRisqueEleveInfComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-inf/dialog-aod-nonprogramme-dabi-risque-eleve-inf.component';
import { DialogAodNonprogrammeDabiRisqueEleveSupComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup/dialog-aod-nonprogramme-dabi-risque-eleve-sup.component';
import { DialogAodNonprogrammeDabiRisqueEleveSupPossComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss/dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss.component';
import { DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-oui/dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-oui.component';
import { DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-non/dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-non.component';
import { DialogAodNonprogrammeXabanRisqueComponent } from './dialog-aod-nonprogramme-xaban-risque/dialog-aod-nonprogramme-xaban-risque.component';
import { DialogAodNonprogrammeXabanRisqueTresComponent } from './dialog-aod-nonprogramme-xaban-risque-tres/dialog-aod-nonprogramme-xaban-risque-tres.component';
import { DialogAodNonprogrammeXabanRisqueEleveComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve/dialog-aod-nonprogramme-xaban-risque-eleve.component';
import { DialogAodNonprogrammeXabanRisqueFaibleComponent } from './dialog-aod-nonprogramme-xaban-risque-faible/dialog-aod-nonprogramme-xaban-risque-faible.component';
import { DialogAodNonprogrammeXabanRisqueTresConcComponent } from './dialog-aod-nonprogramme-xaban-risque-tres-conc/dialog-aod-nonprogramme-xaban-risque-tres-conc.component';
import { DialogAodNonprogrammeXabanRisqueTresConcOuiComponent } from './dialog-aod-nonprogramme-xaban-risque-tres-conc-oui/dialog-aod-nonprogramme-xaban-risque-tres-conc-oui.component';
import { DialogAodNonprogrammeXabanRisqueTresConcNonComponent } from './dialog-aod-nonprogramme-xaban-risque-tres-conc-non/dialog-aod-nonprogramme-xaban-risque-tres-conc-non.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc/dialog-aod-nonprogramme-xaban-risque-eleve-conc.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcInfComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-inf/dialog-aod-nonprogramme-xaban-risque-eleve-conc-inf.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcSupComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-sup/dialog-aod-nonprogramme-xaban-risque-eleve-conc-sup.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-oui/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-oui.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-non/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-non.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-oui/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-oui.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-non/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-non.component';
import { DialogAodAigueGraviteComponent } from './dialog-aod-aigue-gravite/dialog-aod-aigue-gravite.component';
import { DialogAodAigueGraviteCritiqueComponent } from './dialog-aod-aigue-gravite-critique/dialog-aod-aigue-gravite-critique.component';
import { DialogAodAigueGraviteGraveComponent } from './dialog-aod-aigue-gravite-grave/dialog-aod-aigue-gravite-grave.component';
import { DialogAodAigueGraviteNonComponent } from './dialog-aod-aigue-gravite-non/dialog-aod-aigue-gravite-non.component';
import { DialogAodAigueGraviteCritiqueDosComponent } from './dialog-aod-aigue-gravite-critique-dos/dialog-aod-aigue-gravite-critique-dos.component';
import { DialogAodAigueGraviteGraveGesteComponent } from './dialog-aod-aigue-gravite-grave-geste/dialog-aod-aigue-gravite-grave-geste.component';
import { DialogAodAigueGraviteGraveGesteImpoComponent } from './dialog-aod-aigue-gravite-grave-geste-impo/dialog-aod-aigue-gravite-grave-geste-impo.component';
import { DialogAodAigueGraviteGraveGesteEffComponent } from './dialog-aod-aigue-gravite-grave-geste-eff/dialog-aod-aigue-gravite-grave-geste-eff.component';
import { DialogAodAigueGraviteGraveGesteImpoConcComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc/dialog-aod-aigue-gravite-grave-geste-impo-conc.component';
import { DialogAodAigueGraviteGraveGesteImpoConcOuiComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc-oui/dialog-aod-aigue-gravite-grave-geste-impo-conc-oui.component';
import { DialogAodAigueGraviteGraveGesteImpoConcNonComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc-non/dialog-aod-aigue-gravite-grave-geste-impo-conc-non.component';
import { DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc-non-rev/dialog-aod-aigue-gravite-grave-geste-impo-conc-non-rev.component';

import { DialogAvkProgrammeRisqueEleveeComponent } from './dialog-avk-programme-risque-elevee/dialog-avk-programme-risque-elevee.component';
import { DialogAvkProgrammeRisqueEleveeOuiComponent } from './dialog-avk-programme-risque-elevee-oui/dialog-avk-programme-risque-elevee-oui.component';
import { DialogAvkProgrammeRisqueEleveeNonComponent } from './dialog-avk-programme-risque-elevee-non/dialog-avk-programme-risque-elevee-non.component';
import { DialogAvkProgrammeRisqueEleveeOuiResComponent } from './dialog-avk-programme-risque-elevee-oui-res/dialog-avk-programme-risque-elevee-oui-res.component';
import { DialogAapProgrammeComponent } from './dialog-aap-programme/dialog-aap-programme.component';
import { DialogAapProgrammeRisqueComponent } from './dialog-aap-programme-risque/dialog-aap-programme-risque.component';
import { DialogAapProgrammeRisqueFaibleComponent } from './dialog-aap-programme-risque-faible/dialog-aap-programme-risque-faible.component';
import { DialogAapProgrammeRisqueInterComponent } from './dialog-aap-programme-risque-inter/dialog-aap-programme-risque-inter.component';
import { DialogAapProgrammeRisqueElComponent } from './dialog-aap-programme-risque-el/dialog-aap-programme-risque-el.component';
import { DialogAapProgrammeRisqueInterRisqueComponent } from './dialog-aap-programme-risque-inter-risque/dialog-aap-programme-risque-inter-risque.component';
import { DialogAapProgrammeRisqueInterRisqueFaibleComponent } from './dialog-aap-programme-risque-inter-risque-faible/dialog-aap-programme-risque-inter-risque-faible.component';
import { DialogAapProgrammeRisqueInterRisqueInterComponent } from './dialog-aap-programme-risque-inter-risque-inter/dialog-aap-programme-risque-inter-risque-inter.component';
import { DialogAapProgrammeRisqueInterRisqueElComponent } from './dialog-aap-programme-risque-inter-risque-el/dialog-aap-programme-risque-inter-risque-el.component';
import { DialogAapProgrammeRisqueInterRisqueTelComponent } from './dialog-aap-programme-risque-inter-risque-tel/dialog-aap-programme-risque-inter-risque-tel.component';
import { DialogAapProgrammeRisqueInterRisqueTelResComponent } from './dialog-aap-programme-risque-inter-risque-tel-res/dialog-aap-programme-risque-inter-risque-tel-res.component';
import { DialogAapProgrammeRisqueElRisqueComponent } from './dialog-aap-programme-risque-el-risque/dialog-aap-programme-risque-el-risque.component';
import { DialogAapProgrammeRisqueElRisqueFaibleComponent } from './dialog-aap-programme-risque-el-risque-faible/dialog-aap-programme-risque-el-risque-faible.component';
import { DialogAapProgrammeRisqueElRisqueInterComponent } from './dialog-aap-programme-risque-el-risque-inter/dialog-aap-programme-risque-el-risque-inter.component';
import { DialogAapProgrammeRisqueElRisqueElComponent } from './dialog-aap-programme-risque-el-risque-el/dialog-aap-programme-risque-el-risque-el.component';
import { DialogAapProgrammeRisqueElRisqueTelComponent } from './dialog-aap-programme-risque-el-risque-tel/dialog-aap-programme-risque-el-risque-tel.component';
import { DialogAapProgrammeRisqueElRisqueTelResComponent } from './dialog-aap-programme-risque-el-risque-tel-res/dialog-aap-programme-risque-el-risque-tel-res.component';
import { DialogAapEndoComponent } from './dialog-aap-endo/dialog-aap-endo.component';
import { DialogAapEndoTypeComponent } from './dialog-aap-endo-type/dialog-aap-endo-type.component';
import { DialogAapEndoTypeAspirineComponent } from './dialog-aap-endo-type-aspirine/dialog-aap-endo-type-aspirine.component';
import { DialogAapEndoTypeAntiComponent } from './dialog-aap-endo-type-anti/dialog-aap-endo-type-anti.component';
import { DialogAapEndoTypeAspirineResComponent } from './dialog-aap-endo-type-aspirine-res/dialog-aap-endo-type-aspirine-res.component';
import { DialogAapEndoTypeAntiResComponent } from './dialog-aap-endo-type-anti-res/dialog-aap-endo-type-anti-res.component';
import { DialogAapEndoTypeAntiResFaibleComponent } from './dialog-aap-endo-type-anti-res-faible/dialog-aap-endo-type-anti-res-faible.component';
import { DialogAapEndoTypeAntiResElComponent } from './dialog-aap-endo-type-anti-res-el/dialog-aap-endo-type-anti-res-el.component';
import { DialogAapEndoTypeAntiResElRisqueComponent } from './dialog-aap-endo-type-anti-res-el-risque/dialog-aap-endo-type-anti-res-el-risque.component';
import { DialogAapEndoTypeAntiResElRisqueFaibleComponent } from './dialog-aap-endo-type-anti-res-el-risque-faible/dialog-aap-endo-type-anti-res-el-risque-faible.component';
import { DialogAapEndoTypeAntiResElRisqueElComponent } from './dialog-aap-endo-type-anti-res-el-risque-el/dialog-aap-endo-type-anti-res-el-risque-el.component';
import { DialogAapOraleComponent } from './dialog-aap-orale/dialog-aap-orale.component';
import { DialogAapOraleMonoComponent } from './dialog-aap-orale-mono/dialog-aap-orale-mono.component';
import { DialogAapOraleBiComponent } from './dialog-aap-orale-bi/dialog-aap-orale-bi.component';
import { DialogAapOraleMonoRisqueComponent } from './dialog-aap-orale-mono-risque/dialog-aap-orale-mono-risque.component';
import { DialogAapOraleBiRisqueComponent } from './dialog-aap-orale-bi-risque/dialog-aap-orale-bi-risque.component';
import { DialogAapOraleBiRisqueFaibleComponent } from './dialog-aap-orale-bi-risque-faible/dialog-aap-orale-bi-risque-faible.component';
import { DialogAapOraleBiRisqueElComponent } from './dialog-aap-orale-bi-risque-el/dialog-aap-orale-bi-risque-el.component';
import { DialogAapOraleBiRisqueElRisqueComponent } from './dialog-aap-orale-bi-risque-el-risque/dialog-aap-orale-bi-risque-el-risque.component';
import { DialogAapOraleBiRisqueElRisqueFaibleComponent } from './dialog-aap-orale-bi-risque-el-risque-faible/dialog-aap-orale-bi-risque-el-risque-faible.component';
import { DialogAapOraleBiRisqueElRisqueElComponent } from './dialog-aap-orale-bi-risque-el-risque-el/dialog-aap-orale-bi-risque-el-risque-el.component';
import { DialogAapNonprogrammeComponent } from './dialog-aap-nonprogramme/dialog-aap-nonprogramme.component';
import { DialogAapNonprogrammeActComponent } from './dialog-aap-nonprogramme-act/dialog-aap-nonprogramme-act.component';
import { DialogAapNonprogrammeActOuiComponent } from './dialog-aap-nonprogramme-act-oui/dialog-aap-nonprogramme-act-oui.component';
import { DialogAapNonprogrammeActNonComponent } from './dialog-aap-nonprogramme-act-non/dialog-aap-nonprogramme-act-non.component';
import { DialogAapNonprogrammeActNonDegresComponent } from './dialog-aap-nonprogramme-act-non-degres/dialog-aap-nonprogramme-act-non-degres.component';
import { DialogAapNonprogrammeActNonDegresUrgentComponent } from './dialog-aap-nonprogramme-act-non-degres-urgent/dialog-aap-nonprogramme-act-non-degres-urgent.component';
import { DialogAapNonprogrammeActNonDegresSemiComponent } from './dialog-aap-nonprogramme-act-non-degres-semi/dialog-aap-nonprogramme-act-non-degres-semi.component';
import { DialogAapNonprogrammeActNonDegresUrgentNeuroComponent } from './dialog-aap-nonprogramme-act-non-degres-urgent-neuro/dialog-aap-nonprogramme-act-non-degres-urgent-neuro.component';
import { DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent } from './dialog-aap-nonprogramme-act-non-degres-urgent-nonneuro/dialog-aap-nonprogramme-act-non-degres-urgent-nonneuro.component';
import { DialogAapNonprogrammeActNonDegresSemiPosComponent } from './dialog-aap-nonprogramme-act-non-degres-semi-pos/dialog-aap-nonprogramme-act-non-degres-semi-pos.component';
import { DialogAapNonprogrammeActNonDegresSemiPosOuiComponent } from './dialog-aap-nonprogramme-act-non-degres-semi-pos-oui/dialog-aap-nonprogramme-act-non-degres-semi-pos-oui.component';
import { DialogAapNonprogrammeActNonDegresSemiPosNonComponent } from './dialog-aap-nonprogramme-act-non-degres-semi-pos-non/dialog-aap-nonprogramme-act-non-degres-semi-pos-non.component';
import { DialogAapHemorragieComponent } from './dialog-aap-hemorragie/dialog-aap-hemorragie.component';
import { DialogAapHemorragieIntraComponent } from './dialog-aap-hemorragie-intra/dialog-aap-hemorragie-intra.component';
import { DialogAapHemorragieIntraIndicationComponent } from './dialog-aap-hemorragie-intra-indication/dialog-aap-hemorragie-intra-indication.component';
import { DialogAapHemorragieIntraIndicationOuiComponent } from './dialog-aap-hemorragie-intra-indication-oui/dialog-aap-hemorragie-intra-indication-oui.component';
import { DialogAapHemorragieIntraIndicationNonComponent } from './dialog-aap-hemorragie-intra-indication-non/dialog-aap-hemorragie-intra-indication-non.component';
import { DialogAapHemorragieIntraIndicationNonCsgComponent } from './dialog-aap-hemorragie-intra-indication-non-csg/dialog-aap-hemorragie-intra-indication-non-csg.component';
import { DialogAapHemorragieIntraIndicationNonCsg1Component } from './dialog-aap-hemorragie-intra-indication-non-csg1/dialog-aap-hemorragie-intra-indication-non-csg1.component';
import { DialogAapHemorragieChocComponent } from './dialog-aap-hemorragie-choc/dialog-aap-hemorragie-choc.component';
import { DialogAapHemorragieGraveComponent } from './dialog-aap-hemorragie-grave/dialog-aap-hemorragie-grave.component';
import { DialogAapHemorragieNongraveComponent } from './dialog-aap-hemorragie-nongrave/dialog-aap-hemorragie-nongrave.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    DialogAVKComponent,
    DialogAodComponent,
    DialogAapComponent,
    DialogAvkProgrammeComponent,
    DialogAvkProgrammeRisqueComponent,
    DialogAvkProgrammeRisqueFaibleComponent,
    DialogAvkProgrammeRisqueFaibleRes1Component,
    DialogAvkProgrammeRisqueFaibleRes2Component,
    DialogAvkProgrammeRisqueEndoComponent,
    DialogAvkProgrammeRisqueEndoFaibleComponent,
    DialogAvkProgrammeRisqueEndoFaibleInrComponent,
    DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent,
    DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent,
    DialogAvkProgrammeRisqueEndoFaibleInrNonComponent,
    DialogAvkProgrammeRisqueEndoElComponent,
    DialogAvkProgrammeRisqueEndoElOuiComponent,
    DialogAvkProgrammeRisqueEndoElOuiResComponent,
    DialogAvkProgrammeRisqueEndoElNonComponent,
    DialogAvkProgrammeOraleComponent,
    DialogAvkProgrammeOraleRisqueComponent,
    DialogAvkProgrammeOraleRisqueFaibleComponent,
    DialogAvkProgrammeOraleRisqueFaibleInrComponent,
    DialogAvkProgrammeOraleRisqueFaibleInrResComponent,
    DialogAvkProgrammeOraleRisqueElComponent,
    DialogAvkProgrammeOraleRisqueCritiqueComponent,
    DialogAvkProgrammeOraleRisqueElRisqueComponent,
    DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent,
    DialogAvkProgrammeOraleRisqueElRisqueElComponent,
    DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent,
    DialogAvkProgrammeOraleRisqueElRisqueElNonComponent,
    DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent,
    DialogAvkHemmoragieComponent,
    DialogAvkNonprogrammeComponent,
    DialogAvkNonprogrammeFaibleComponent,
    DialogAvkNonprogrammeEleveeComponent,
    DialogAvkNonprogrammeFaibleResComponent,
    DialogAvkNonprogrammeEleveeResComponent,
    DialogAvkNonprogrammeEleveeResUrgentComponent,
    DialogAvkNonprogrammeEleveeResSemiurgentComponent,
    DialogAodProgrammeComponent,
    DialogAodProgrammeRisqueComponent,
    DialogAodProgrammeRisqueFaibleComponent,
    DialogAodProgrammeRisqueInterComponent,
    DialogAodProgrammeRisqueMajComponent,
    DialogAodProgrammeRisqueInterXabanComponent,
    DialogAodProgrammeRisqueInterDabiComponent,
    DialogAodProgrammeRisqueInterXabanOuiComponent,
    DialogAodProgrammeRisqueInterXabanNonComponent,
    DialogAodProgrammeRisqueInterXabanClairComponent,
    DialogAodProgrammeRisqueInterDabiClairComponent,
    DialogAodProgrammeRisqueInterDabiClairOuiComponent,
    DialogAodProgrammeRisqueInterDabiClairEntreComponent,
    DialogAodProgrammeRisqueMajAccuComponent,
    DialogAodProgrammeRisqueMajAccuNonComponent,
    DialogAodProgrammeRisqueMajAccuOuiComponent,
    DialogAodEndoComponent,
    DialogAodOraleComponent,
    DialogAodNonprogrammeComponent,
    DialogAodAigueComponent,
    DialogAodEndoRisqueComponent,
    DialogAodEndoRisqueFaibleComponent,
    DialogAodEndoRisqueEleveComponent,
    DialogAodEndoRisqueEleveTypeComponent,
    DialogAodEndoRisqueEleveTypeXabanComponent,
    DialogAodEndoRisqueEleveTypeDabiComponent,
    DialogAodEndoRisqueEleveTypeDabiClairComponent,
    DialogAodEndoRisqueEleveTypeDabiClairEntreComponent,
    DialogAodEndoRisqueEleveTypeDabiClairSupComponent,
    DialogAodOraleRisqueComponent,
    DialogAodOraleRisqueFaibleComponent,
    DialogAodOraleRisqueEleveComponent,
    DialogAodOraleRisqueCritiqueComponent,
    DialogAodOraleRisqueEleveTypeComponent,
    DialogAodOraleRisqueEleveTypeXabanComponent,
    DialogAodOraleRisqueEleveTypeDabiComponent,
    DialogAodOraleRisqueEleveTypeXabanClairComponent,
    DialogAodOraleRisqueEleveTypeDabiRisqueComponent,
    DialogAodNonprogrammeDabiComponent,
    DialogAodNonprogrammeXabanComponent,
    DialogAodNonprogrammeDabiRisqueComponent,
    DialogAodNonprogrammeDabiRisqueTresComponent,
    DialogAodNonprogrammeDabiRisqueEleveComponent,
    DialogAodNonprogrammeDabiRisqueFaibleComponent,
    DialogAodNonprogrammeDabiRisqueTresConcComponent,
    DialogAodNonprogrammeDabiRisqueTresConcNonComponent,
    DialogAodNonprogrammeDabiRisqueTresConcOuiComponent,
    DialogAodNonprogrammeDabiRisqueEleveInfComponent,
    DialogAodNonprogrammeDabiRisqueEleveSupComponent,
    DialogAodNonprogrammeDabiRisqueEleveSupPossComponent,
    DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent,
    DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent,
    DialogAodNonprogrammeXabanRisqueComponent,
    DialogAodNonprogrammeXabanRisqueTresComponent,
    DialogAodNonprogrammeXabanRisqueEleveComponent,
    DialogAodNonprogrammeXabanRisqueFaibleComponent,
    DialogAodNonprogrammeXabanRisqueTresConcComponent,
    DialogAodNonprogrammeXabanRisqueTresConcOuiComponent,
    DialogAodNonprogrammeXabanRisqueTresConcNonComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcInfComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component,
    DialogAodNonprogrammeXabanRisqueEleveConcSupComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent,
    DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent,
    DialogAodAigueGraviteComponent,
    DialogAodAigueGraviteCritiqueComponent,
    DialogAodAigueGraviteGraveComponent,
    DialogAodAigueGraviteNonComponent,
    DialogAodAigueGraviteCritiqueDosComponent,
    DialogAodAigueGraviteGraveGesteComponent,
    DialogAodAigueGraviteGraveGesteImpoComponent,
    DialogAodAigueGraviteGraveGesteEffComponent,
    DialogAodAigueGraviteGraveGesteImpoConcComponent,
    DialogAodAigueGraviteGraveGesteImpoConcOuiComponent,
    DialogAodAigueGraviteGraveGesteImpoConcNonComponent,
    DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent,
    DialogAvkProgrammeRisqueEleveeComponent,
    DialogAvkProgrammeRisqueEleveeOuiComponent,
    DialogAvkProgrammeRisqueEleveeNonComponent,
    DialogAvkProgrammeRisqueEleveeOuiResComponent,
    DialogAapProgrammeComponent,
    DialogAapProgrammeRisqueComponent,
    DialogAapProgrammeRisqueFaibleComponent,
    DialogAapProgrammeRisqueInterComponent,
    DialogAapProgrammeRisqueElComponent,
    DialogAapProgrammeRisqueInterRisqueComponent,
    DialogAapProgrammeRisqueInterRisqueFaibleComponent,
    DialogAapProgrammeRisqueInterRisqueInterComponent,
    DialogAapProgrammeRisqueInterRisqueElComponent,
    DialogAapProgrammeRisqueInterRisqueTelComponent,
    DialogAapProgrammeRisqueInterRisqueTelResComponent,
    DialogAapProgrammeRisqueElRisqueComponent,
    DialogAapProgrammeRisqueElRisqueFaibleComponent,
    DialogAapProgrammeRisqueElRisqueInterComponent,
    DialogAapProgrammeRisqueElRisqueElComponent,
    DialogAapProgrammeRisqueElRisqueTelComponent,
    DialogAapProgrammeRisqueElRisqueTelResComponent,
    DialogAapEndoComponent,
    DialogAapEndoTypeComponent,
    DialogAapEndoTypeAspirineComponent,
    DialogAapEndoTypeAntiComponent,
    DialogAapEndoTypeAspirineResComponent,
    DialogAapEndoTypeAntiResComponent,
    DialogAapEndoTypeAntiResFaibleComponent,
    DialogAapEndoTypeAntiResElComponent,
    DialogAapEndoTypeAntiResElRisqueComponent,
    DialogAapEndoTypeAntiResElRisqueFaibleComponent,
    DialogAapEndoTypeAntiResElRisqueElComponent,
    DialogAapOraleComponent,
    DialogAapOraleMonoComponent,
    DialogAapOraleBiComponent,
    DialogAapOraleMonoRisqueComponent,
    DialogAapOraleBiRisqueComponent,
    DialogAapOraleBiRisqueFaibleComponent,
    DialogAapOraleBiRisqueElComponent,
    DialogAapOraleBiRisqueElRisqueComponent,
    DialogAapOraleBiRisqueElRisqueFaibleComponent,
    DialogAapOraleBiRisqueElRisqueElComponent,
    DialogAapNonprogrammeComponent,
    DialogAapNonprogrammeActComponent,
    DialogAapNonprogrammeActOuiComponent,
    DialogAapNonprogrammeActNonComponent,
    DialogAapNonprogrammeActNonDegresComponent,
    DialogAapNonprogrammeActNonDegresUrgentComponent,
    DialogAapNonprogrammeActNonDegresSemiComponent,
    DialogAapNonprogrammeActNonDegresUrgentNeuroComponent,
    DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent,
    DialogAapNonprogrammeActNonDegresSemiPosComponent,
    DialogAapNonprogrammeActNonDegresSemiPosOuiComponent,
    DialogAapNonprogrammeActNonDegresSemiPosNonComponent,
    DialogAapHemorragieComponent,
    DialogAapHemorragieIntraComponent,
    DialogAapHemorragieIntraIndicationComponent,
    DialogAapHemorragieIntraIndicationOuiComponent,
    DialogAapHemorragieIntraIndicationNonComponent,
    DialogAapHemorragieIntraIndicationNonCsgComponent,
    DialogAapHemorragieIntraIndicationNonCsg1Component,
    DialogAapHemorragieChocComponent,
    DialogAapHemorragieGraveComponent,
    DialogAapHemorragieNongraveComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
