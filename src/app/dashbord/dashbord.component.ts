import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource,MatTreeFlattener } from '@angular/material/tree';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { DialogAVKComponent } from '../dialog-avk/dialog-avk.component';
import { DialogAodComponent } from '../dialog-aod/dialog-aod.component';
import { DialogAapComponent } from '../dialog-aap/dialog-aap.component';



interface Karim{
  name:string;
  children?:Karim[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: Karim[] = [
  {
    name: 'AVK',
    children: [{
      name: 'AVK et acte invasif programmé',
      children:[
        {
        name:'Risque hémorragique',
        children:[{name:'FAIBLE',children:[{name:'INR compris entre 2 et 3 ET absence de risque médical associé (prise d’un autre médicament ou comorbidité interférant avec l’hémostase ou avec l’équilibre du traitement anticoagulant)',children:[{name:'Poursuivre AVK'}]},{name:'INR > 3 OU présence d’un risque médical associé (prise d’un autre médicament ou comorbidité interférant avec l’hémostase ou avec l’équilibre du traitement anticoagulant)',children:[{name:'Arrêt AVK et avis référent'}]}]},{name: ' INTERMEDIAIRE / ELEVE',children:[{name:'Risque thrombotique élevé* OUI? NON? [Risque thrombotique élevé: Valves cardiaques mécaniques à risque TE (Valve ancienne génération; Valve mécanique mitrale+antc de multiple AVC ou d’1 AVC périop ou d’une thrombose de valve; Valve mécanique + AVC/AIT < 3 mois ou FA, HTA, diabète, insuffisance cardiaque congestive, HTA ou âge > 75); FA à risque TE (FA + CHA2DS2VASc ≥ 7 ou CHADS2 score ≥ 5; FA + AVC/AIT < 3 mois; FA et valvulopathie rhumatismale); MTEV à risque (< 3mois; Thrombophilie sévère; Ac anti phospholipide; cancer actif)]',children:[{name:'NON',children:[{name:'Dernière prise AVK J-5; PAS de relai. Contrôle INR J-1. Si INR ˃ 1,5  ( >1,2 si neurochirurgie) donner 5 mg Vit K per os et contrôle INR à J0. Reprise de l’AVK à J0 ou J1 contrôle INR H 48. Si voie orale indisponible et risque hémorragique contrôlé, HBPM ou HNF à dose curative à partir H6 PO. Arrêt héparine après 2 INR efficaces à 24 heures d’intervalle.  '}]},{name:'OUI',children:[{name:'Dernière prise AVK J-5 AVEC relai HBPM ou HNF 48h après la dernière prise de Previscan ou de Coumadine, 24 h après celle du Sintrom; Arrêt HNF IV SE H -6-4, arrêt HNF S/C H-12-8; arrêt HBPM H-24. Contrôle INR J-1. Si INR ˃ 1,5  ( >1,2 si neurochirurgie) donner 5 mg Vit K per os et contrôle INR à J0. Pas de contrôle du TCA ou de l’activité anti-Xa à J0.  Reprise AVK à J0 ou J1 ET HBPM ou HNF à dose curative si le risque hémorragique est contrôlé à partir H6 PO. Arrêt héparine après 2 INR efficaces à 24 heures d’intervalle.  '}]}]}]}]
        }
    ]
    }, 
    {
      name: 'AVK et endoscopie digestive',
      children:[
        {name:'Risque hémorragique de l’acte endoscopique',children:[{name:'Faible risque hémorragique : Acte diagnostic +/– biopsie; Pose de prothèse biliaire ou pancréatique; Entéroscopie assistée sans polypectomie; Prothèse œsophage.',children:[{name:'INR stable et dans la fourchette thérapeutique durant la semaine précédant la procédure',children:[{name:'OUI',children:[{name:'Poursuivre AVK'}]},{name:'NON',children:[{name:'Avis référent'}]}]}]},{name:'Risque hémorragique élevé:  Polypectomie; Mucosectomie; Dissection sous muqueuse; Traitement endoscopique des varices; Dilatation; Gastrostomie; CPRE + sphinctérotomie ou ampullectomie; Echoendoscopie + biopsie.',children:[{name:'Risque thrombotique élevé* OUI? NON? [Risque thrombotique élevé: Valves cardiaques mécaniques à risque TE (Valve ancienne génération; Valve mécanique mitrale+antc de multiple AVC ou d’1 AVC périop ou d’une thrombose de valve; Valve mécanique + AVC/AIT < 3 mois ou FA, HTA, diabète, insuffisance cardiaque congestive, HTA ou âge > 75); FA à risque TE (FA + CHA2DS2VASc ≥ 7 ou CHADS2 score ≥ 5; FA + AVC/AIT < 3 mois; FA et valvulopathie rhumatismale); MTEV à risque (< 3mois; Thrombophilie sévère; Ac anti phospholipide; cancer actif)]',children:[{name:'NON',children:[{name:'Dernière prise AVK  J-5 et vérifier que INR < 1.5 avant endoscopie, redémarrer AVK le soir de J0 à la dose habituelle et vérifier INR à 1 semaine'}]},{name:'OUI',children:[{name:'Dernière prise AVK  J-5 et vérifier que INR < 1.5 avant endoscopie, redémarrer AVK le soir de J0 à la dose habituelle et vérifier INR à 1 semaine'}]}]}]}]}
    ]
    },
     {
      name: 'AVK et chirurgie Orale',
      children:[{
        name:'Risque hémorragique de la chirurgie',children:[{name:'Faible: Avulsion simple; Avulsions multiples dans 1 même quadrant; Chirurgie endodontique, périapicale, énucléation de kystes et tumeurs bénignes (lésion < 3cm); Chirurgie muco-gingivale (hors greffe gingivale avec prélèvement palatin); Chirurgie pré-orthodontique d’une dent enclavée, incluse; Implant unitaire; Dégagement implant(s) (pilier cicatrisation); Biopsie-exérèse muqueuse orale (≤1 cm)',children:[{name:'INR',children:[{name:'INR<4  Pas d’arrêt des AVK et PEC en pratique de ville'},{name:'INR>4 Surseoir à l’acte et avis médecin préscripteur'}]}]},{name:'Elevé: Avulsions multiples dans plusieurs quadrants; Avulsion de dent(s) incluse(s); Implants multiples dans plusieurs quadrants; Elévation du sinus; Greffes osseuses d’apposition; Greffe osseuse particulaire et régénération osseuse guidée; Chirurgie des tissus mous (lithiase salivaire);  Chirurgie endodontique, périapicale, énucléation de kystes et tumeurs bénignes (lésion > 3cm); Fermeture d’une communication bucco-sinusienne; Exérèse des pseudotumeurs et tumeurs bénignes de la muqueuse buccale (> 1 cm)',children:[{name:'Risque thrombotique',children:[{name:'Faible: ACFA sans ATCD emboliques; MTEV à faible risque (les MTEV à haut risque étant: TVP proximale et/ou EP < 3 mois, MTEV récidivante idiopathique (n ≥ 2, au moins un accident sans facteur déclenchant',children:[{name:'Dernière prise AVK J-5; reprise de l’AVK à J0 le soir ou J+1 avec INR de contrôle H 48; pas de relai héparine; prise en charge en pratique de ville'}]},{name:'Elevé: Valve mécanique (tout type); ACFA avec ATCD emboliques; MTEV à haut risque: TVP proximale et/ou EP < 3 mois, MTEV récidivante idiopathique (n ≥ 2, au moins un accident sans facteur déclenchant)',children:[{name:'Prothèse valvulaire ET pose d’implant ou chirurgie pré-implantaires ou parodontale',children:[{name:'OUI',children:[{name:'Contre indication à la chirurgie'}]},{name:'NON',children:[{name:'Arrêt AVK (dernière prise J-5); + relai héparine, HBPM ou HNF (48 h après la dernière prise de Previscan ou Coumadine, 24 h après celle du Sintrom); Arrêt HNF intraveineuse à la seringue électrique 4 à 6 h avant l’acte, arrêt HNF S/C 8 à12 h avant, arrêt HBPM 24 h avant; redémarrer AVK le soir de J0 ou à J+1 à la dose habituelle, poursuivre HBPM jusqu’à INR efficace; Prise en charge hospitalière; ou surseoir à l’acte'}]}]}]}]}]},{name:'Critique: Bloc du nerf alvéolaire inférieur bilatéral; Prélèvement symphysaire; Greffe gingivale avec prélèvement palatin',children:[{name:'Contre-indication sous AVK, discuter bénifice risque, avis médecin préscripteur'}]}]
      }]
    },
     {
      name: 'AVK et acte invasif non programmé',
      children:[{
        name:'Risque hémorragique',children:[{name:'Faible',children:[{name:'Pas d’antagonisation'}]},{name:'Elevé',children:[{name:'Degrès d’urgence',children:[{name:'Urgence < 6h',children:[{name:'CCCP: 0,5-1 ml/kg pour viser INR < 1,5 (1,2 en neurologie) ET Vit K 5-10 mg ivl'}]},{name:'Semiurgence (possibilité d’attendre plus de 6h)',children:[{name:'Vitamine K 5 à 10 mg per os'}]}]}]}]
      }]
    },
    {
      name: 'AVK et hémorragie aigue',
      children:[{name:'CCP: 0,5-1 ml/kg pour viser INR < 1,5 (1,2 en neurologie) ET Vit K 5-10 mg ivl'}]
    },
    ],
  },
  {
    name: 'AOD',
    children: [{
      name: 'AOD et acte invasif programmé',
      children:[
        {
        name:'Risque hémorragique',
        children:[{name:'FAIBLE',children:[{name:'Dernière prise à H-24 (pas de prise la veille au soir ni le matin de l\'intervention\'); Pas de relai ni dosage; ; Reprise à H24, au moins à H12 de la prise HBPM prophylactique et en l\'absence de CI chirurgicale'}]},{name: 'INTERMEDIAIRE',children:[{name:'Xaban: RIVAROXABAN, APIXABAN, EDOXABAN',children:[{name:'Clairance de la Créatinine ≥ 30ml/mn',children:[{name:'OUI',children:[{name:'Dernière prise J-3. Pas de relai ni dosage; Reprise à H24, au moins à H12 de la prise HBPM prophylactique et en l\'absence de CI chirurgicale'}]},{name:'NON',children:[{name:'Dernière prise J-4. Pas de relai ni dosage; Reprise à H24, au moins à H12 de la prise HBPM prophylactique et en l\'absence de CI chirurgicale'}]}]},{name:'Clairance de la Créatinine > 50 ml/mn',children:[{name:'OUI',children:[{name:'Dernière prise J-4. Pas de relai ni dosage; Reprise à H24, au moins à H12 de la prise HBPM prophylactique et en l\'absence d\'hémorragie ou de CI chirurgicale'}]}]},{name:'Clairance de la Créatinine entre 30 et 50 ml/mn',children:[{name:'Dernière prise J-5. Pas de relai ni dosage; Reprise à H24 après l’acte, au moins à H12 de la prise HBPM prophylactique et en l\'absence de CI chirurgicale'}]}]},{name:'DABIGATRAN'}]},{name:'MAJEUR',children:[{name:'Risque d\'accumulation ou de retard d\'élimination du produit (IRénale, sujet âgé)',children:[{name:'NON',children:[{name:'Dernière prise J-5. Pas de relai ni dosage; Reprise à H48-72, au moins à H12 de la prise HBPM prophylactique et en l\'absence de CI chirurgicale'}]},{name:'OUI',children:[{name:'Dernière prise J-5 ou plus. Pas de relai. Discuter dosage de l\'AOD; Reprise à H48-72, au moins à H12 de la prise HBPM prophylactique et en l\'absence de CI chirurgicale '}]}]}]}]
        }
    ]
    },
    {
      name: 'AOD et endoscopie digestive',
      children:[
        {
        name:'Risque hémorragique de l\'acte endoscopique',children:[{name:'Faible risque hémorragique : Acte diagnostic +/– biopsie; Pose de prothèse biliaire ou pancréatique; Entéroscopie assistée sans polypectomie; Prothèse œsophage.',children:[{name:'Saut de la prise matinale de J0'}]},{name:'Risque hémorragique élevé:  Polypectomie; Mucosectomie; Dissection sous muqueuse; Traitement endoscopique des varices; Dilatation; Gastrostomie; CPRE + sphinctérotomie ou ampullectomie; Echoendoscopie + biopsie.',children:[{name:'Type de l\'AOD',children:[{name:'XABAN: RIVAROXABAN, APIXABAN, EDOXABAN',children:[{name:'Dernière prise J-3, reprise AOD J2 à J3 '}]},{name:'DABIGATRAN',children:[{name:'Clairance de la créatinine',children:[{name:'Cl Cr entre 30 et 50 ml/mn',children:[{name:'dernière prise J-5, reprise J2 à J3'}]},{name:'Cl Cr > 50 ml/mn',children:[{name:'dernière prise J-3, reprise J2 à J3'}]}]}]}]}]}]
        }
    ]
    },
    {
      name: 'AOD et chirurgie orale',
      children:[
        {
        name:'Risque hémorragique de l\'acte de chirurgie orale',children:[{name:'Faible risque hémorragique: Avulsion simple; Avulsions multiples dans 1 même quadrant ; Chirurgie endodontique et périapicale (lésion ≤ 2cm); Chirurgie muco-gingivale (hors greffe gingivale avec prélèvement palatin); Chirurgie pré-orthodontique d’une dent enclavée; Implant unitaire; Dégagement implant(s); Biopsie-exérèse muqueuse orale (≤1 cm)',children:[{name:'Saut de la dernière prise; prise en charge en pratique de ville'}]},{name:'Risque hémorragique élevé: Avulsions multiples dans plusieurs quadrants; Avulsion de dent(s) incluse(s); Implants multiples dans plusieurs quadrants; Elévation du sinus; Greffes osseuses d’apposition; Greffe osseuse particulaire et régénération osseuse guidée; Chirurgie et tissus mous (lithiase salivaire); Enucléation de kystes et tumeurs bénignes (lésion > 2 cm); Fermeture d’une communication bucco-sinusienne; Exérèse des pseudotumeurs et tumeurs bénignes de la muqueuse buccale (> 1 cm)',children:[{name:'Type de l\'AOD',children:[{name:'XABAN: RIVAROXABAN, APIXABAN, EDOXABAN',children:[{name:'Clairance Créatinine',children:[{name:'≥ 30 ml/mn: Dernière prise J-3. Pas de relai ni dosage; Reprise à H24'},{name:' < 30  ml/mn: Dernière prise J-4. Pas de relai ni dosage; Reprise à H24'}]}]},{name:'DABIGADRAN',children:[{name:'Risque d\'accumulation ou de retard d\'élimination du produit (IRénale, sujet âgé)',children:[{name:'OUI: Dernière prise J-5 ou plus. Pas de relai. Discuter dosage de l\'AOD; Reprise à H48-72'},{name:'NON: Dernière prise J-5. Pas de relai ni dosage; Reprise à H48-72'}]}]}]}]},{name:'Risque critique: Bloc du nerf alvéolaire inférieur bilatéral; Prélèvement symphysaire; Greffe gingivale avec prélèvement palatin',children:[{name:'Contre-indication sous AOD, discuter bénifice risque, avis médecin préscripteur'}]}]
        }
    ]
    },
    {
      name: 'AOD et acte invasif non programmé',
      children:[
        {
        name:'Dabigatran et acte invasif non programmé',children:[{name:'Risque hémorragique',children:[{name:'Très élevé',children:[{name:'Concentration résiduelle Dabigatran ≤ 30 ng/ml',children:[{name:'NON',children:[{name:'Antagoniser avant chirurgie:  Charbon activé+ Idarucizumab: 5g si disponible ou  CCP: 50 UI/kg ou FEIBA 30-50 UI/kg '}]},{name:'OUI',children:[{name:'Opérer sans délai'}]}]}]},{name:'Elevé',children:[{name:'Concentration résiduelle Dabigatran ≤ 50 ng/ml ou concentration non disponible ET heure de dernière prise > 24h ou ClCr >50 ml/mn',children:[{name:'Opérer sans délai'}]},{name:'Concentration résiduelle Dabigatran > 50 ng/ml ou concentration non disponible ET heure de dernière prise ≤ 24h ou ClCr ≤50 ml/mn',children:[{name:'Possibilité d\'attendre 8h après la dernière prise du Dabigatran',children:[{name:'OUI',children:[{name:'Reporter et mesure de concentration'}]},{name:'NON',children:[{name:'Débuter l\'acte et en cas de saignement antagonisation (Idarucizumab: 5g si disponible ou  CCP: 50 UI/kg ou FEIBA 30-50 UI/kg)'}]}]}]}]},{name:'Faible',children:[{name:'Opérer sans délai'}]}]}]
        },{name:'Xaban et acte invasif non programmé',children:[{name:'Risque hémorragique',children:[{name:'Très élevé (neurochirurgie par exemple)',children:[{name:'Concentration résiduelle Xaban ≤ 30 ng/ml',children:[{name:'OUI',children:[{name:'Opérer sans délai'}]},{name:'NON',children:[{name:'Antagonisation avant chirurgie: charbon activé + andexanet alfa si disponible ou CCP: 25-50 UI/kg ou FEIBA 30-50 UI/kg '}]}]}]},{name:'Elevé',children:[{name:'Concentration résiduelle du Xaban',children:[{name:'≤ 30 ng/ml',children:[{name:'Opérer sans délai'}]},{name:'Entre 30-200 ng/ml',children:[{name:'Possibilité d\'attendre 12h',children:[{name:'OUI',children:[{name:'Attendre et refaire dosage à 12h'}]},{name:'NON',children:[{name:'Débuter chirurgie et antagoniser si besoin (CCP: 25-50 UI/kg ou FEIBA 30-50 UI/kg)'}]}]}]},{name:'Entre 200-400 ng/ml',children:[{name:'Possibilité d\'attendre 24h',children:[{name:'OUI',children:[{name:'Attendre et refaire dosage à 24h'}]},{name:'NON',children:[{name:'Débuter chirurgie et antagoniser si besoin (CCP: 25-50 UI/kg ou FEIBA 30-50 UI/kg)'}]}]}]},{name:'> 400 ng/ml',children:[{name:'Surdosage, risque hémorragiquemajeur discuter antagonisation avant chirurgiebesoin (CCP: 25-50 UI/kg ou FEIBA 30-50 UI/kg)'}]}]}]},{name:'Faible',children:[{name:'Opérer sans délai'}]}]}]}
    ]
    },
    {
      name: 'AOD et hémorragie aigue',
      children:[
        {
        name:'Gravité de l\'hémorragie',children:[{name:'Hémorragie critique (hémorragies intracérébrales ou dans un organe critique (oculaire par exemple)).',children:[{name:'Dosage AOD et réversion sans attendre résultat',children:[{name:'DABIGADRAN: Idarucizumab: 5g si disponible ou  CCP: 50 UI/kg ou FEIBA 30-50 UI/kg '}]}]},{name:'Hémorragie grave (présence au moins un des critères suivants : hémorragie  non contrôlable par les moyens usuels ; instabilité hémodynamique ; nécessité d\'un geste hémostatique urgent ; transfusion de CG ; localisation menaçant le pronostic vital ou fonctionnel (intracrânienne, intra spinale, intraoculaire, péricarde, hémothorax…).'},{name:'Hémorragie non grave'}]
        }
    ]
    },],

  },
  {
    name: 'AAP',
    children: [
      {name:'AAP et acte invasif programmé',children:[{name:'Risque hémorragique de l\'acte',children:[{name:'Faible (Exemples: Cataracte, Chir mammaire, Chir de la main, Arthroscopie genou/épaule)= réalisable sous bithérapie ',children:[{name:'Poursuivre mono ou  bithérapie AAP'}]},{name:'Intermédiaire (exemples: Gastrectomie, Rectum, Thyroide, Prothèse épaule) = réalisables sous aspirine seule',children:[{name:'Risque thrombotique',children:[{name:'Faible: Prévention primaire par aspirine',children:[{name:'Arrêt aspirine: dernière prise J-3'}]},{name:'Moyen: Prévention secondaire par aspirine ou clopidogrel:prévention cardiovasculaire, AOMI, ATCD AVC',children:[{name:'Aspirine: à poursuivre '},{name:'Clopidogrel: Arrêt; dernière prise J-5, relai par Aspirine 75 mg'}]},{name:'Elevé: Bithérapie AAP pour stent coronaire ˃ 1 mois, sans haut risque de thrombose et IDM ˃ 6 mois',children:[{name:'Poursuite Aspirine et arrêt anti-P2Y12: dernière prise de Clopidrogrel et Ticagrélor J-5, dernière prise de Prasugrel J-7'}]},{name:'Très élevé: Bithérapie AAP pour stent coronaire : stent < 1 mois, stent à haut risque thrombose < 6 mois, IDM < 6 mois',children:[{name:'Possibilité de différer la chirurgie',children:[{name:'OUI: différer'},{name:'NON: Poursuite Aspirine et arrêt anti-P2Y12: dernière prise  Clopidrogrel et Ticagrélor  J-5, Prasugrel  J-7 '}]}]}]}]},{name:'Elevé (exemples: Résection hépatique; DPC; Néphrectomie; Neurochirurgie) = non réalisable sous AAP',children:[{name:'Risque thrombotique',children:[{name:'Faible: Prévention primaire par aspirine',children:[{name:'Arrêt de l\'aspirine: dernière prise J-3 (J-5 neurochirurgie)'}]},{name:'Moyen: Prévention secondaire par aspirine ou clopidogrel:prévention cardiovasculaire, AOMI, ATCD AVC',children:[{name:'Arrêt Aspirine ou Clopidogrel dernière prise J-3 et J-5 (+2J si neurochirurgie)'}]},{name:'Elevé: Bithérapie AAP pour stent coronaire ˃ 1 mois, sans haut risque de thrombose et IDM ˃ 6 mois',children:[{name:'Arrêt des AAP; dernière prise Aspirine J-3, Clopidrogrel et Ticagrélor J-5, Prasugrel J-7. (+2J si neurochirurgie)'}]},{name:'Très élevé: Bithérapie AAP pour stent coronaire : stent < 1 mois, stent à haut risque thrombose* < 6 mois, IDM < 6 mois',children:[{name:'Possibilité de différer la chirurgie',children:[{name:'OUI: différer'},{name:'NON: Arrêt des AAP et discuter d\'un AAP IV si stent < 1 mois'}]}]}]}]}]}]},
{name:'AAP et endoscopie digestive',children:[{name:'Type AAP',children:[{name:'Aspirine',children:[{name:'Acte potentiellement très hémorragique: Ampullectomie',children:[{name:'OUI: Dernière prise aspirine J-3'},{name:'NON: Poursuivre aspirine'}]}]},{name:'Anti P2Y12 ou bithérapie',children:[{name:'Risque hémorragique de l\'acte endoscopique',children:[{name:'Faible: Acte diagnostic +/– biopsie; Pose de prothèse biliaire ou pancréatique; Entéroscopie assistée sans polypectomie; Prothèse oesophage',children:[{name:'Poursuivre l\'anti P2Y12 en mono ou bithérapie'}]},{name:'Elevé: Polypectomie; Mucosectomie; Dissection sous muqueuse; Traitement endoscopique des varices; Dilatation; Gastrostomie; CPRE + sphinctérotomie ou ampullectomie; Echoendoscopie + biopsie',children:[{name:'Risque Thrombotique',children:[{name:'Faible: Coronaropathie sans stent; Pathologie cérébro-vasculaire ou vasculaire périphérique ',children:[{name:'Arrêt Anti P2Y12 à J-7 . En cas de bithérapie, poursuivre aspirine. Reprendre Anti P2Y12 J1 ou J2'}]},{name:'Elevé: Stent actif < 12 mois; Stent nu <1 mois',children:[{name:'Poursuite aspirine et avis cardiologue pour arrêt clopidogrel'}]}]}]}]}]}]}]},
{name:'AAP et chirurgie orale',children:[{name:'Monothérapie AAP: Aspirine ou Clopidogrel',children:[{name:'Acte à risque critique: Bloc du nerf alvéolaire inférieur bilatéral; Prélèvement symphysaire; Greffe gingivale avec prélèvement palatin ',children:[{name:'OUI: Contre indication sous AAP, avis médecin préscripteur'},{name:'NON: Pas d\'arrêt de l\'AAP et prise en charge en pratique de ville'}]}]},{name:'Bithérapie AAP: Aspirine + Clopidogrel ou Prasugrel ou Ticagrelor',children:[{name:'Risque hémorragique',children:[{name:'FAIBLE: Avulsion simple; Avulsions multiples dans 1 même quadrant ; Chirurgie endodontique et périapicale (lésion ≤ 2cm); Chirurgie muco-gingivale (hors greffe gingivale avec prélèvement palatin); Chirurgie pré-orthodontique d’une dent enclavée; Implant unitaire; Dégagement implant(s); Biopsie-exérèse muqueuse orale (≤1 cm)',children:[{name:'Pas d\'arrêt de la bithérapie AAP et prise en charge en pratique de ville'}]},{name:'ELEVE: Avulsions multiples dans plusieurs quadrants; Avulsion de dent(s) incluse(s); Implants multiples dans plusieurs quadrants; Elévation du sinus; Greffes osseuses d’apposition; Greffe osseuse particulaire et régénération osseuse guidée; Chirurgie et tissus mous (lithiase salivaire); Enucléation de kystes et tumeurs bénignes (lésion > 2 cm); Fermeture d’une communication bucco-sinusienne; Exérèse des pseudotumeurs et tumeurs bénignes de la muqueuse buccale (> 1 cm)',children:[{name:'Risque Thrombotique',children:[{name:'Faible: Stent nu > 6 semaines; Stent actif > 6 à 12 mois; Syndrome coronarien aigu > 6 semaines à 1 an ',children:[{name:'Poursuivre prise de Aspirine; dernière prise de Clopidogrel, Prasugrel et Ticagrelor à J-5, J-7 et j-5 et prise en charge en pratique de ville'}]},{name:'Elevé: tout type de stent < 6 semaines; Stent actif <  6 à 12 mois; Syndrome coronarien aigu < 6 semaines',children:[{name:'Nécessité de poursuivre la bithérapie; prise en charge hospitalière; surseoir à l\'acte'}]}]}]}]}]}]},
{name:'AAP et acte invasif non programmé',children:[{name:'Acte réalisable sous AAP? ',children:[{name:'OUI: opérer sans délai'},{name:'NON',children:[{name:'Degrés d’urgence',children:[{name:'Acte Urgent',children:[{name:'Procédure neurochirurgicale',children:[{name:'Neutraliser le ou les AAP avant chirurgie: Aspirine: transfusion plaquettes à dose standard: 0,5-0,7x10¹¹/10kg; Clopidogrel ou Prasugrel: transfusion plaquettes 2 fois la dose standard: 0,5-0,7x10¹¹/10kg; Ticagrelor: transfusion plaquettaire non efficace, discuter rFVIIa'}]},{name:'Procédure non neurochirurgicale',children:[{name:'Débuter l\'acte sans neutralisation et si saignement actif anormal neutraliser le ou les AAP: Aspirine: transfusion plaquettes à dose standard: 0,5-0,7x10¹¹/10kg; Clopidogrel ou Prasugrel: transfusion plaquettes 2 fois la dose standard: 0,5-0,7x10¹¹/10kg; Ticagrelor: transfusion plaquettaire non efficace, discuter rFVIIa '}]}]},{name:'Acte Semi Urgent',children:[{name:'Possibilité de temporiser suffisemment',children:[{name:'OUI: Aspirine dernière prise J-3 (J-5 si neurochir); Clopidogrel et Tigagrelol dernière prise J-5 (J-7 si neurochir); Prasugrel dernière prise J-7 (J-9 si neurochir)'},{name:'NON: Débuter l\'acte sans neutralisation et si saignement actif anormal neutraliser le ou les AAP: Aspirine: transfusion plaquettes à dose standard: 0,5-0,7x10¹¹/10kg; Clopidogrel ou Prasugrel: transfusion plaquettes 2 fois la dose standard: 0,5-0,7x10¹¹/10kg; Ticagrelor: transfusion plaquettaire non efficace, discuter rFVIIa '}]}]}]}]}]}]},
{name:'AAP et hémorragie aigue',children:[{name:'Hémorragie intracranienne ',children:[{name:'indication chirurgicale',children:[{name:'OUI: neutraliser le ou les AAP (Aspirine, transfusion plaquettes à dose standard: 0,5-0,7x10¹¹/10kg; Clopidogrel ou Prasugrel, transfusion plaquettes 2 fois la dose standard: 0,5-0,7x10¹¹/10kg; Ticagrelor, transfusion plaquettaire non efficace, discuter rFVIIa)'},{name:'NON',children:[{name:'CGS > 8:  Pas de neutralisation pour aspirine. A discuter pour autre AAP'},{name:'CGS ≤ 8: Discuter neutralisation (Aspirine, transfusion plaquettes à dose standard: 0,5-0,7x10¹¹/10kg; Clopidogrel ou Prasugrel, transfusion plaquettes 2 fois la dose standard: 0,5-0,7x10¹¹/10kg; Ticagrelor, transfusion plaquettaire non efficace, discuter rFVIIa)'}]}]}]},{name:'Choc hémorragique',children:[{name:'Neutralisationsi bi AAP (Aspirine, transfusion plaquettes à dose standard: 0,5-0,7x10¹¹/10kg; Clopidogrel ou Prasugrel, transfusion plaquettes 2 fois la dose standard: 0,5-0,7x10¹¹/10kg; Ticagrelor, transfusion plaquettaire non efficace, discuter rFVIIa). Pas de neutralisation si mono AAP sauf si echec du ttt conventionnel'}]},{name:'Hémorragie grave: présence au moins un des critères suivants : hémorragie  non contrôlable par les moyens usuels ; instabilité hémodynamique ; nécessité d\'un geste hémostatique urgent ; transfusion de CG ; localisation menaçant le pronostic vital ou fonctionnel (intracrânienne, intra spinale, intraoculaire, péricarde, hémothorax…).',children:[{name:'Pas de neutralisation du ou des AAP sauf si echec du ttt conventionnel'}]},{name:'Hémorragie non grave',children:[{name:'Pas de neutralisation du ou des AAP'}]}]}
    ],
  },
];
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  openDialog() {
    this.dialog.open(DialogAVKComponent);
  }
  openDialog1() {
    this.dialog.open(DialogAodComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAapComponent);
  }
  fileName= 'ExcelSheet.xlsx';
  
  ExcelData:any;
  private _transformer = (node: Karim, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  constructor(public dialog: MatDialog) { 
    this.dataSource.data = TREE_DATA;
  }
 
  displayval='';
    Id ='';
  getvalue(val:string){
    console.warn(val);
    this.Id=val;
  }
  ngOnInit(): void {
  }
  rec(node:any) {
    console.log(node);
    this.displayval=node;
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
 
  userdata: Array<{ID:string,Decision:string}> = [];
  savedata(){    this.userdata.push({ID:this.Id,Decision:this.displayval});
  console.log('userdata:' ,this.userdata);
  alert("SAVE MADE SUCCESSUFLLY");
  }
  exportexcel(): void
  { 
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.userdata);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,'Sheet1');
    XLSX.writeFile(wb, this.fileName);
 
  }
}
