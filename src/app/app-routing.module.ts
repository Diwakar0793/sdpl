import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SolutionsComponent } from './components/pages/solutions/solutions.component';
import { SolutionsDetailsComponent } from './components/pages/solutions-details/solutions-details.component';
import { CaseStudiesComponent } from './components/pages/case-studies/case-studies.component';
import { CaseStudiesDetailsComponent } from './components/pages/case-studies-details/case-studies-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EssilorComponent } from './components/pages/essilor/essilor.component';
import { RemidioComponent } from './components/pages/remidio/remidio.component';
import { WestPharmaComponent } from './components/pages/west-pharma/west-pharma.component';
import { MsritComponent } from './components/pages/msrit/msrit.component';
import { JainComponent } from './components/pages/jain/jain.component';
import { SowparnikaComponent } from './components/pages/sowparnika/sowparnika.component';
import { PresalesSupportComponent } from './components/pages/presales-support/presales-support.component';
import { DemoPocComponent } from './components/pages/demo-poc/demo-poc.component';
import { BuyBackComponent } from './components/pages/buy-back/buy-back.component';
import { OnsiteSupportComponent } from './components/pages/onsite-support/onsite-support.component';
import { PartneringComponent } from './components/pages/partnering/partnering.component';
import { PurchaseProgramComponent } from './components/pages/purchase-program/purchase-program.component';
import { OurVisionComponent } from './components/pages/our-vision/our-vision.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { OurApproachComponent } from './components/pages/our-approach/our-approach.component';
import { PostSalesComponent } from './components/pages/post-sales/post-sales.component';
import { AnnualMaintenanceComponent } from './components/pages/annual-maintenance/annual-maintenance.component';
import { PerIncidentComponent } from './components/pages/per-incident/per-incident.component';
import { MacOsBasicComponent } from './components/pages/mac-os-basic/mac-os-basic.component';
import { MacOsAdvancedComponent } from './components/pages/mac-os-advanced/mac-os-advanced.component';
import { ItTrainingComponent } from './components/pages/it-training/it-training.component';
import { DedicatedEngComponent } from './components/pages/dedicated-eng/dedicated-eng.component';
import { AppleBusinessComponent } from './components/pages/apple-business/apple-business.component';

const routes: Routes = [
    {path: 'home-one', component: HomeOneComponent},
    {path: '', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'solutions', component: SolutionsComponent},
    {path: 'solutions-details', component: SolutionsDetailsComponent},
    {path: 'case-studies', component: CaseStudiesComponent},
    {path: 'case-studies-details', component: CaseStudiesDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'terms-condition', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'essilor', component: EssilorComponent},
    {path: 'remidio', component: RemidioComponent},
    {path: 'westpharma', component: WestPharmaComponent},
    {path: 'msrit', component: MsritComponent},
    {path: 'jain', component: JainComponent},
    {path: 'sowparnika', component: SowparnikaComponent},
    {path: 'presales-support', component: PresalesSupportComponent},
    {path: 'demo', component: DemoPocComponent},
    {path: 'buy-back', component: BuyBackComponent},
    {path: 'onsite-support', component: OnsiteSupportComponent},
    {path: 'partnering', component: PartneringComponent},
    {path: 'purchase-program', component: PurchaseProgramComponent},
    {path: 'ourvision', component: OurVisionComponent},
    {path: 'ourteam', component: OurTeamComponent},
    {path: 'ourapproach', component: OurApproachComponent},
    {path: 'postsales', component: PostSalesComponent},
    {path: 'annualmaintenance', component: AnnualMaintenanceComponent},
    {path: 'perincident', component: PerIncidentComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'macOs-basic', component: MacOsBasicComponent},
    {path: 'macOs-advanced', component: MacOsAdvancedComponent},
    {path: 'it-training', component: ItTrainingComponent},
    {path: 'dedicated-engineer', component: DedicatedEngComponent},
    {path: 'apple-business', component: AppleBusinessComponent},


    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }