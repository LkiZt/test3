<script>
    import { createEventDispatcher } from 'svelte';



    let sourceCode = `const encoded = [
    {
        groupId: 783,

        areaId: "0",
        departmentId: "688",
        directionId: "0",
        mediaTypeId: "0",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "0",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 784,

        areaId: "0",
        departmentId: "688",
        directionId: "0",
        mediaTypeId: "0",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "0",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 785,

        areaId: "0",
        departmentId: "688",
        directionId: "0",
        mediaTypeId: "0",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "0",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 786,

        areaId: "0",
        departmentId: "688",
        directionId: "0",
        mediaTypeId: "0",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "0",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 787,

        areaId: "0",
        departmentId: "688",
        directionId: "0",
        mediaTypeId: "0",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "0",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 788,

        areaId: "0",
        departmentId: "688",
        directionId: "18858",
        mediaTypeId: "111",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "15130",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 789,

        areaId: "0",
        departmentId: "688",
        directionId: "18858",
        mediaTypeId: "111",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "15152",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 790,

        areaId: "0",
        departmentId: "688",
        directionId: "18858",
        mediaTypeId: "111",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "15130",
        formatId: "0",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: null,
        ca: null,
        mpmId: null,
    },
    {
        groupId: 791,

        areaId: "0",
        departmentId: "688",
        directionId: "18858",
        mediaTypeId: "111",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "15130",
        formatId: "110639",
        unitId: "82226",
        platformId: "145868",
        budgetId: null,
        adPlatformId: "1557",
        service: null,
        formatSize: "не применим",
        ca: null,
        mpmId: null,
    },
    {
        groupId: 792,

        areaId: "0",
        departmentId: "688",
        directionId: "18858",
        mediaTypeId: "111",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "15130",
        formatId: "110639",
        unitId: "82226",
        platformId: "145868",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: "не применим",
        ca: null,
        mpmId: null,
    },
    {
        groupId: 793,

        areaId: "0",
        departmentId: "688",
        directionId: "18858",
        mediaTypeId: "111",
        mediaId: "676",
        resellingId: "18842",
        serviceTypeId: "124",
        formatTypeId: "15152",
        formatId: "82193",
        unitId: "82226",
        platformId: "0",
        budgetId: null,
        adPlatformId: "1026",
        service: null,
        formatSize: "Не применимо",
        ca: null,
        mpmId: null,
    },
    ];

    const translations = {
    0: "",
    111: "СММ",
    124: "Размещение",
    676: "Диджитал",
    688: "Маркетинг",
    1026: "Telegram",
    1557: "Посевы",
    15130: "СММ - 2",
    15152: "Баннеры",
    18842: "Нет",
    18858: "СММ - 3",
    82193: "Баннеры",
    82226: "Фикс",
    110639: "Статья",
    };
    `;
    let userCode = `function decodeFields(encoded, translations) {
    const decoded = [];

    const uniqueIds = new Set();

    encoded.forEach(obj => {
        const decodedObj = {};
        Object.entries(obj).forEach(([key, value]) => {
        
        if (key.endsWith('Id')) {
            const decodedValue = translations[value] || value;
            
            decodedObj[key] = decodedValue;
            
            if (!['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
            
                uniqueIds.add(value);
            }
        
        } else {
            decodedObj[key] = value;
        }
        });
        decoded.push(decodedObj);
    });
    
    return { decoded, uniqueIds: Array.from(uniqueIds) };
    
}
    
const { decoded, uniqueIds } = decodeFields(encoded, translations);

console.log('Расшифрованные данные:');

decoded.forEach(obj => console.log(JSON.stringify(obj, null, 2)));

console.log('Уникальные id:');

const uniqueIdsArray = Array.from(uniqueIds);

for (let i = 0; i < uniqueIdsArray.length; i += 4) {

    console.log(uniqueIdsArray.slice(i, i + 4).join(', '));

}`;
    let consoleOutput = '';

    const dispatch = createEventDispatcher();

    function handleCompileButtonClick() {
        compileAndRunCode();
    }

    function compileAndRunCode() {
        const combinedCode = `${sourceCode}\n${userCode}`;
        consoleOutput = '';

        try {
            let consoleLogHolder = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleLogHolder.push(args);
            };
            eval(combinedCode);
            console.log = originalConsoleLog;
            consoleOutput = consoleLogHolder.map(log => log.join(' ')).join('\n');
        } catch (error) {
            consoleOutput = `Ошибка выполнения: ${error.message}`;
        }
    }
</script>

<style>
    .task1__compiler {
        display: flex;
        column-gap: 100px;
    }
    .task1__compiler label {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 35px;
        font-weight: 600;
        color: #fff;
        font-size: 30px;
    }
    .task1__compiler label textarea, .task1__result {
        width: 450px;
        height: 700px;
        background: rgba(53, 54, 55, 0.65);
        border-radius: 25px;
        border: 2px solid rgb(120, 132, 175);
        color: #fff;
        font-size: 20px;
        line-height: 145%;
    }
    .task1__compiler label textarea{
        padding: 25px;
    }
    .task1__compiler label:nth-child(2) {
        height: 740px;
    }
    .task1__result {
        height: 750px;
        overflow: scroll;
        padding: 0 25px;
    }
    textarea {
        resize: none;
    }
    textarea::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    .task1__result::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    .task1__result pre {
        white-space: pre-wrap;
    }
    .task1__btn {
        position: absolute;
        width: 29.2%;
        left: 35.2%;
        bottom: 0;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        line-height: 145%;
        margin-top: 20px;
        background: rgba(53, 54, 55, 0.65);
        border-radius: 25px;
        border: 1px solid rgb(120, 132, 175);
        height: 70px;
    }
</style>

<form action="" class="task1__compiler">
    <label>Исходный код<textarea class="original" bind:value={sourceCode}></textarea></label>
    <label>Пользовательский код<textarea bind:value={userCode}></textarea></label>
    <label for="output">Вывод
        <div class="task1__result" id="output">
            <pre>{consoleOutput}</pre>
        </div>
    </label>
</form>
<button class="task1__btn" type="button" on:click={handleCompileButtonClick}>Выполнить</button>