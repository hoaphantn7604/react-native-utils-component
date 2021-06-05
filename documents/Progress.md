## StepProgress, TooltipProgress, Progress
#### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/component/progress.png)

#### StepProgress

| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| data               | Array                | Yes       |                  |
| style              | ViewStyle            | No        |                  |
| activeColor        | String               | No        | #32C5FF          |
| inActiveColor      | String               | No        | #C6CDD8          |
| textColor          | String               | No        | #C6CDD8          |
| selectColor        | String               | No        | #FF9900          |
| textSize           | Number               | No        | 16               |
| fontFamily         | String               | No        |                  |
| selectIndex        | Number               | No        | 0                |
| onSelectIndex      | (index)=> Void       | No        |                  |
| iconTick           | Path                 | No        |                  |

#### TooltipProgress

| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| data               | Array                | Yes       |                  |
| style              | ViewStyle            | No        |                  |
| tooltipStyle       | ViewStyle            | No        |                  |
| activeColor        | String               | No        | #32C5FF          |
| inActiveColor      | String               | No        | #C6CDD8          |
| selectColor        | String               | No        | #FF9900          |
| textSize           | Number               | No        | 16               |
| fontFamily         | String               | No        |                  |
| selectIndex        | Number               | No        | 0                |
| onSelectIndex      | (index)=> Void       | No        |                  |

#### Progress

| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| data               | Array                | Yes       |                  |
| percent            | Number               | Yes       |                  |
| style              | ViewStyle            | No        |                  |
| height             | String               | No        | 6                |
| border             | String               | No        | false            |

#### Example
```js
    import React, { useState } from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import {
        Progress,
        StepProgress,
        TooltipProgress,
    } from 'react-native-utils-components';
    import { useScale } from 'react-native-utils-toolkit';

    const ic_step1 = require('./icons/step1.png');
    const ic_step2 = require('./icons/step2.png');
    const ic_step3 = require('./icons/step3.png');
    const ic_step4 = require('./icons/step4.png');

    const { scale, fontScale } = useScale;

    const data = [
        { text: 'Step 1', status: true },
        { text: 'Step 2', status: true },
        { text: 'Step 3', status: true },
        { text: 'Step 4', status: false },
    ];
    const data2 = [
        { text: 'Step 1', icon: ic_step1, status: true },
        { text: 'Step 2', icon: ic_step2, status: true },
        { text: 'Step 3', icon: ic_step3, status: true },
        { text: 'Step 4', icon: ic_step4, status: false },
    ];
    const data3 = [
        { stage: 'S1', text: 'Hello S1', status: true },
        { stage: 'S2', text: 'Hello S2', status: true },
        { stage: 'S3', text: 'Hello S3', status: true },
        { stage: 'S4', text: 'Hello S4', status: false },
    ];
    const data4 = [
        { icon: ic_step1, text: 'Hello S1', status: true },
        { icon: ic_step2, text: 'Hello S2', status: true },
        { icon: ic_step3, text: 'Hello S3', status: true },
        { icon: ic_step4, text: 'Hello S4', status: false },
    ];

    export interface Props {
        name: string;
    }

    const ProgressScreen: React.FC<Props> = _props => {
        const [step, setStep] = useState(2);
        const [step2, setStep2] = useState(2);
        const [stage, setStage] = useState(2);
        const [stage2, setStage2] = useState(2);

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.title}>Step Progress</Text>
                    <StepProgress
                        data={data}
                        selectIndex={step}
                        onSelectIndex={index => {
                            setStep(index);
                        }}
                        activeColor="#32C5FF"
                        inActiveColor="#C6CDD8"
                        selectColor="#32C5FF"
                        textColor="gray"
                        textSize={15}
                    />

                    <StepProgress
                        style={{ marginTop: 20 }}
                        data={data2}
                        selectIndex={step2}
                        onSelectIndex={index => {
                            setStep2(index);
                        }}
                        activeColor='#F4A460'
                        inActiveColor="#C6CDD8"
                        selectColor='#F4A460'
                        textColor="gray"
                        textSize={scale(15)}
                    />
                </View>

                <View style={styles.row}>
                    <Text style={styles.title}>Tooltip Progress</Text>
                    <TooltipProgress
                        data={data3}
                        activeColor="#32C5FF"
                        inActiveColor="#C6CDD8"
                        selectColor="#32C5FF"
                        selectIndex={stage}
                        onSelectIndex={index => {
                            setStage(index);
                        }}
                    />

                    <TooltipProgress
                        style={{ marginTop: 20 }}
                        data={data4}
                        activeColor='#F4A460'
                        inActiveColor="#C6CDD8"
                        selectColor='#F4A460'
                        selectIndex={stage2}
                        onSelectIndex={index => {
                            setStage2(index);
                        }}
                    />
                </View>

                <View style={styles.row}>
                    <Text style={styles.title}>Progress</Text>
                    <Progress
                        data={[
                            { color: 'red', percent: 33.33 },
                            { color: 'gray', percent: 33.33 },
                            { color: 'green', percent: 33.33 },
                        ]}
                        percent={70}
                        border
                    />
                </View>
            </View>
        );
    };

    export default ProgressScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: scale(20),
        },
        row: {
            marginVertical: scale(20),
        },
        title: {
            fontSize: fontScale(18),
            marginBottom: scale(16),
        },
    });

```