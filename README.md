# Docebo Test App
## INSTALLATION

###Prerequisites

Install `react-native-cli` globally installed.

```
npm install -g react-native-cli
```

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Make sure you have installed Android Studio and relatives SDK Plaform-Tools

Install _CocoaPods_
```
[sudo] gem install cocoapods -n /usr/local/bin
```

Before running the project as usual please install all dependencies with:
```
 cd doceboTest && npm install && cd ios/ && pod install && cd ..
```
To run ios
```
    npm run ios
```
To run android (suggested: open android emulator before)
```
    npm run android
```

