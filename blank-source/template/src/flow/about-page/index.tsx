{{{{raw-helper}}}}
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Components } from '../../sdk';

export interface IProps extends Components.IPageProps {}
export interface IState {}

export class AboutPage extends Components.Page<IProps, IState> {
  override state: IState = {};

  override render() {
    return (
      <IonPage>
        <IonHeader>Title</IonHeader>
        <IonContent>I am the about page</IonContent>
      </IonPage>
    );
  }
}
{{{{/raw-helper}}}}
