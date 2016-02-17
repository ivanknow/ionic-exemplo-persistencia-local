# Exemplo de Persistencia Local

No começo eu tentei usar o angular-cache, mas não deu certo nem no emulador nem no celular. Nesse código usei o localStorage que serve para 
guardar strings numa área do browser. Funcionou no navegador, emulador e celular.

gerando APK
http://ionicframework.com/docs/guide/publishing.html

cordova build --release android

cd platforms/android/build/outputs/apk/

keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

lembre de guardar a chave, senão vc n pode atualizar o APK na google play

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name

/home/ivanknow/Android/Sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk MinhasContas.apk

e pronto!

