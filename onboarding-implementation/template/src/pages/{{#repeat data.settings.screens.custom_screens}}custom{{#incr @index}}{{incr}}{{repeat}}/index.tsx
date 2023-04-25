import { IonButton, IonContent, IonFooter, IonPage, IonText } from '@ionic/react'
import { Lib } from '../../bundle'
import styles from './index.module.css'

export class CustomScreen extends Lib.BasePage {
    onNextClickHandler = () => {
        // do the logic here

        this.next()
    }

    override render = () => {
        return (
            <IonPage className={styles.root}>
                <IonContent>
                    <IonText>Custom screen 1</IonText>
                </IonContent>
                <IonFooter>
                    <IonButton onClick={this.onNextClickHandler}>
                        Next
                    </IonButton>
                </IonFooter>
            </IonPage>
        )
    }
}