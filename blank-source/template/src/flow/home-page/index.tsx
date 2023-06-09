import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Components } from '../../sdk';
import React from 'react';

export interface IHomePageExtension extends Components.IPageExtensions {
  white_boxes: {
    red_box: React.ComponentClass;
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/ban-types
export interface IProps extends Components.IPageProps<{}, IHomePageExtension> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IState {}

export class HomePage extends Components.Page<IProps, IState> {
  override state: IState = {};

  override render() {
    return (
      <IonPage>
        <IonHeader>Home Page</IonHeader>
        <IonContent>
          <div>
            I am the hello world page
            <br />
            you can extend the below content (red box) !!
          </div>

          {{{{ignore}}}}
          <div style={{ backgroundColor: 'red', border: '1px solid red' }}>
            {this.props.extensions?.white_boxes?.red_box && (
              <this.props.extensions.white_boxes.red_box />
            )}
          </div>
          {{{{/ignore}}}}

        </IonContent>
      </IonPage>
    );
  }
}
