export function find(name: string): {
    name: Array<string>
    colorFrom: string
    colorTo: string
    icon: string
    width: number
    height: number
} {
    return languages.filter(function (languages) {
        return languages.name
            .map((language) => language.toUpperCase())
            .includes(name.toUpperCase())
    })[0]
}

const languages = [
    {
        name: ['JavaScript', 'JS'],
        colorFrom: '#FFE693',
        colorTo: '#E4A125',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path id="Icon_simple-javascript" data-name="Icon simple-javascript" fill="#FFFFFF" d="M0,0H36V36H0ZM33.051,27.414c-.263-1.642-1.332-3.023-4.5-4.309-1.1-.517-2.331-.878-2.7-1.71a1.771,1.771,0,0,1-.069-1.058,1.719,1.719,0,0,1,2.273-.99,2.44,2.44,0,0,1,1.464,1.35c1.551-1.014,1.551-1.014,2.632-1.687a6.191,6.191,0,0,0-.879-1.17,5.038,5.038,0,0,0-4.251-1.551l-1.058.133A4.835,4.835,0,0,0,23.4,17.929a4.706,4.706,0,0,0,.854,6.706c2.048,1.53,5.042,1.866,5.424,3.307.36,1.755-1.305,2.318-2.949,2.115a3.949,3.949,0,0,1-2.632-2L21.35,29.631a6.066,6.066,0,0,0,1.215,1.663c2.61,2.634,9.135,2.5,10.306-1.506a5.077,5.077,0,0,0,.111-2.475l.069.1ZM19.576,16.546H16.2c0,2.907-.014,5.8-.014,8.708,0,1.848.094,3.545-.207,4.066-.495,1.034-1.77.9-2.349.72a2.894,2.894,0,0,1-1.245-1.282,1.287,1.287,0,0,0-.191-.294L9.462,30.151a5.306,5.306,0,0,0,1.986,2.275,6.6,6.6,0,0,0,4.81.607,4.213,4.213,0,0,0,2.716-2.117c.765-1.4.6-3.1.6-5.019.018-3.081,0-6.163,0-9.269l.006-.084Z"/>
        </svg>`,
        width: 36,
        height: 36,
    },
    {
        name: ['TypeScript', 'TS'],
        colorFrom: '#AFD3FC',
        colorTo: '#2E79C7',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path id="Icon_simple-typescript" data-name="Icon simple-typescript" fill="#FFFFFF" d="M0,18V36H36V0H0Zm29.011-1.434a4.476,4.476,0,0,1,2.251,1.3,5.82,5.82,0,0,1,.863,1.155c.012.045-1.554,1.095-2.5,1.684-.035.022-.173-.126-.326-.354a2.042,2.042,0,0,0-1.692-1.017c-1.092-.075-1.794.5-1.788,1.451a1.32,1.32,0,0,0,.153.675c.24.5.687.8,2.085,1.4,2.579,1.11,3.681,1.84,4.367,2.88a5.225,5.225,0,0,1,.417,4.389,4.819,4.819,0,0,1-3.983,2.85,10.985,10.985,0,0,1-2.742-.027,6.62,6.62,0,0,1-3.663-1.91,6.341,6.341,0,0,1-.937-1.388,2.371,2.371,0,0,1,.33-.212c.162-.091.767-.441,1.338-.772l1.035-.6.218.321A4.836,4.836,0,0,0,25.8,29.7a3.341,3.341,0,0,0,3.5-.177,1.562,1.562,0,0,0,.2-2c-.279-.4-.851-.735-2.473-1.44A8.9,8.9,0,0,1,23.64,24a4.747,4.747,0,0,1-.989-1.8,7.24,7.24,0,0,1-.063-2.3,4.386,4.386,0,0,1,3.691-3.417,9.112,9.112,0,0,1,2.732.08Zm-8.451,1.5.012,1.475H15.885V32.858H12.57V19.544H7.887V18.1a14.387,14.387,0,0,1,.039-1.485c.018-.024,2.869-.036,6.326-.03l6.293.018Z"/>
        </svg>`,
        width: 36,
        height: 36,
    },
    {
        name: ['Java'],
        colorFrom: '#FFC7A2',
        colorTo: '#EB6B01',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30.642" height="41.317" viewBox="0 0 30.642 41.317">
            <g id="XMLID_7_" transform="translate(-39.401 -0.001)">
            <path id="XMLID_8_" d="M115.013,7.656C113.1,9,110.94,10.521,109.78,13.039c-2.014,4.393,4.121,9.184,4.383,9.386A.339.339,0,0,0,114.67,22c-.022-.043-2.224-4.32-2.142-7.388.029-1.069,1.525-2.281,3.108-3.564a17.955,17.955,0,0,0,4.056-4.067c2.111-3.431-.235-6.8-.259-6.838a.339.339,0,0,0-.607.267,7.206,7.206,0,0,1-.809,4.552A9.862,9.862,0,0,1,115.013,7.656Z" transform="translate(-60.495)" fill="#fff"/>
            <path id="XMLID_9_" d="M157.611,63.794a.339.339,0,0,0-.324-.587c-.324.123-7.942,3.059-7.942,6.607a6.759,6.759,0,0,0,1.808,4.681,3.559,3.559,0,0,1,.643.962,4.825,4.825,0,0,1-.567,2.688.339.339,0,0,0,.5.429c.131-.091,3.2-2.262,2.65-4.877a6.449,6.449,0,0,0-1.125-2.361c-.668-.993-1.15-1.71-.418-3.035C153.69,66.757,157.572,63.823,157.611,63.794Z" transform="translate(-95.051 -54.625)" fill="#fff"/>
            <path id="XMLID_10_" d="M63.564,166.508a1.2,1.2,0,0,0,.178,1.122c.826,1.146,3.751,1.778,8.237,1.778h0c.608,0,1.25-.012,1.907-.036,7.172-.257,9.832-2.491,9.942-2.586a.339.339,0,0,0-.311-.583A49.349,49.349,0,0,1,73,167.138c-3.661,0-5.525-.264-5.981-.458a8.389,8.389,0,0,1,3.469-1.248.339.339,0,0,0-.065-.671C69.376,164.761,64.114,164.845,63.564,166.508Z" transform="translate(-20.832 -142.441)" fill="#fff"/>
            <path id="XMLID_11_" d="M217.486,160.673a7.073,7.073,0,0,0-2.941.773.339.339,0,0,0,.16.637c.031,0,3.155.026,3.438,1.81.251,1.54-2.956,4.035-4.213,4.866a.339.339,0,0,0,.187.621.333.333,0,0,0,.071-.008c.3-.064,7.3-1.606,6.556-5.68C220.293,161.2,218.723,160.673,217.486,160.673Z" transform="translate(-150.756 -138.907)" fill="#fff"/>
            <path id="XMLID_12_" d="M101.214,202.339a.339.339,0,0,0-.139-.339L99.4,200.824a.339.339,0,0,0-.281-.05,32.962,32.962,0,0,1-4.319.749,29.973,29.973,0,0,1-3.275.173c-2.547,0-4.212-.3-4.454-.519-.032-.062-.022-.09-.016-.105a.853.853,0,0,1,.432-.326.339.339,0,0,0-.2-.647c-1.683.406-2.506.974-2.446,1.688.106,1.266,3.038,1.915,5.517,2.087.356.024.742.037,1.146.037h0a48.128,48.128,0,0,0,9.458-1.306A.339.339,0,0,0,101.214,202.339Z" transform="translate(-39.282 -172.984)" fill="#fff"/>
            <path id="XMLID_13_" d="M96.086,232.774a.339.339,0,0,0-.194-.622c-.226.006-2.207.1-2.346,1.357a1.311,1.311,0,0,0,.321,1.024c.711.843,2.632,1.344,5.87,1.532.383.023.772.034,1.157.034a17.649,17.649,0,0,0,7.005-1.344.339.339,0,0,0,.032-.6l-2.12-1.294a.341.341,0,0,0-.246-.043c-.013,0-1.36.282-3.391.558a10.958,10.958,0,0,1-1.431.079,17.762,17.762,0,0,1-4.72-.549A.136.136,0,0,1,96.086,232.774Z" transform="translate(-46.803 -200.703)" fill="#fff"/>
            <path id="XMLID_14_" d="M52.173,258.522c9.43-.008,14.491-1.685,15.466-2.74a1.167,1.167,0,0,0,.353-.958,1.478,1.478,0,0,0-.649-.954.342.342,0,0,0-.442.06.335.335,0,0,0,0,.441c.059.077.094.2-.08.379-.39.364-4.321,1.469-10.866,1.8-.9.047-1.837.07-2.8.07-5.861,0-10.149-.8-10.712-1.271a8.35,8.35,0,0,1,3.347-1.092.339.339,0,0,0-.1-.669c-.046.006-.2.016-.379.026-2.662.163-5.738.525-5.9,1.9a1.4,1.4,0,0,0,.369,1.128c.719.808,2.785,1.882,12.392,1.882Z" transform="translate(0 -219.234)" fill="#fff"/>
            <path id="XMLID_15_" d="M107.043,271.785a.338.338,0,0,0-.39.077c-.014.015-1.432,1.5-5.694,2.368a55.249,55.249,0,0,1-9.1.493c-4.418,0-8.621-.174-8.663-.176a.339.339,0,0,0-.093.668,50.409,50.409,0,0,0,10.473,1.043,48.818,48.818,0,0,0,8.356-.7c4.952-.868,5.3-3.323,5.311-3.427A.339.339,0,0,0,107.043,271.785Z" transform="translate(-37.552 -234.94)" fill="#fff"/>
            </g>
        </svg>`,
        width: 30.642,
        height: 41.317,
    },
    {
        name: ['PHP', 'PHP7'],
        colorFrom: '#CED3FF',
        colorTo: '#7077D7',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="44.962" height="23.652" viewBox="0 0 44.962 23.652">
        <path id="Icon_simple-php" data-name="Icon simple-php" fill="#FFFFFF" d="M13.133,17H11.364L10.4,21.959h1.57a3.8,3.8,0,0,0,2.327-.588,3.124,3.124,0,0,0,1.03-1.965,2.148,2.148,0,0,0-.232-1.864A2.644,2.644,0,0,0,13.133,17Zm9.348-8.466C10.066,8.532,0,13.826,0,20.357S10.066,32.184,22.481,32.184s22.481-5.3,22.481-11.827S34.9,8.532,22.481,8.532ZM16.374,22.491a4.547,4.547,0,0,1-1.718,1.032,8,8,0,0,1-2.407.307H10.036L9.423,26.98H6.842l2.3-11.851h4.965A4.12,4.12,0,0,1,17.378,16.3,3.684,3.684,0,0,1,18,19.587a5.164,5.164,0,0,1-1.622,2.9Zm7.539,1.339,1.017-5.244a1.417,1.417,0,0,0-.127-1.22,1.8,1.8,0,0,0-1.287-.326H21.469L20.15,23.832H17.588l2.3-11.853h2.561L21.84,15.13h2.282a4.444,4.444,0,0,1,2.971.751,2.489,2.489,0,0,1,.493,2.434L26.514,23.83h-2.6Zm14.232-4.243a5.212,5.212,0,0,1-.571,1.587,5.35,5.35,0,0,1-1.051,1.317A4.571,4.571,0,0,1,34.8,23.523a8.009,8.009,0,0,1-2.409.307H30.185l-.613,3.151H26.99l2.3-11.851h4.963a4.12,4.12,0,0,1,3.267,1.177,3.679,3.679,0,0,1,.62,3.28ZM33.283,17H31.517l-.967,4.961h1.57a3.791,3.791,0,0,0,2.327-.588,3.134,3.134,0,0,0,1.032-1.965,2.147,2.147,0,0,0-.234-1.864A2.644,2.644,0,0,0,33.283,17Z" transform="translate(0 -8.532)"/>
        </svg>`,
        width: 44.962,
        height: 23.652,
    },
    {
        name: ['Python', 'Python3'],
        colorFrom: '#9ECFFA',
        colorTo: '#337AB4',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <g id="Icon_ionic-logo-python" data-name="Icon ionic-logo-python" transform="translate(-4.5 -4.5)">
          <path id="Path_7" data-name="Path 7" fill="#FFFFFF" d="M16.66,21.882a6.135,6.135,0,0,1,1.088-.1h9.459a4.52,4.52,0,0,0,1.212-.165,4.225,4.225,0,0,0,3.132-4.1V9.324c0-2.332-1.987-4.084-4.348-4.472A35.547,35.547,0,0,0,22.029,4.5a25.088,25.088,0,0,0-4.159.352c-3.682.641-4.353,1.989-4.353,4.472v2.69h9.017v1.5H10.589c-3.347,0-6.062,4-6.088,8.946,0,.024,0,.047,0,.071a13.082,13.082,0,0,0,.252,2.574c.748,3.726,3.078,6.443,5.836,6.443h1.426V27.237A5.553,5.553,0,0,1,16.66,21.882Zm.958-11.465a1.64,1.64,0,1,1,1.634-1.635A1.634,1.634,0,0,1,17.618,10.418Z"/>
          <path id="Path_8" data-name="Path 8" fill="#FFFFFF" d="M37.921,17.125c-.861-3.431-3.092-5.875-5.708-5.875H30.787v3.82a5.709,5.709,0,0,1-4.648,5.888,5.067,5.067,0,0,1-.78.061H15.6a4.829,4.829,0,0,0-1.226.157,4.032,4.032,0,0,0-3.128,3.9v8.193c0,2.332,2.346,3.7,4.648,4.373a15.93,15.93,0,0,0,9.052,0c2.189-.626,4.335-1.89,4.335-4.373V30.787H20.267v-1.5H32.213c2.371,0,4.425-2.007,5.43-4.936a12.615,12.615,0,0,0,.658-4.081A12.93,12.93,0,0,0,37.921,17.125ZM25.139,32.179A1.64,1.64,0,1,1,23.5,33.814,1.634,1.634,0,0,1,25.139,32.179Z" transform="translate(2.198 2.198)"/>
        </g>
        </svg>`,
        width: 36,
        height: 36,
    },
    {
        name: ['HTML', 'HTML5'],
        colorFrom: '#FDBAA2',
        colorTo: '#F1652A',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30.857" height="36" viewBox="0 0 30.857 36">
        <path id="Icon_ionic-logo-html5" data-name="Icon ionic-logo-html5" fill="#FFFFFF" d="M4.5,2.25l2.807,32.4,12.6,3.6,12.636-3.6,2.811-32.4ZM29.25,12.857H14.464l.321,4.1H28.928L27.843,29.12l-7.915,2.258L12,29.13,11.455,22.9h3.878l.275,3.157,4.321,1.188,4.293-1.2.448-5.155H11.249L10.239,8.872H29.588Z" transform="translate(-4.5 -2.25)"/>
        </svg>`,
        width: 30.86,
        height: 36,
    },
    {
        name: ['CSS', 'CSS3'],
        colorFrom: '#A7C1FD',
        colorTo: '#2865F0',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30.857" height="36" viewBox="0 0 30.857 36">
        <g id="Icon_ionic-logo-css3" data-name="Icon ionic-logo-css3" transform="translate(19.125 4.5)">
          <path id="Path_3" data-name="Path 3" fill="#FFFFFF" d="M-5.605,17.12Z" transform="translate(1.931 3.089)"/>
          <path id="Path_4" data-name="Path 4" fill="#FFFFFF" d="M-19.125-4.5l2.808,32.4,12.6,3.6L8.922,27.9l2.81-32.4ZM4.233,22.411l-7.924,2.26L-11.6,22.4l-.542-6.25h3.877l.276,3.179,4.306,1.218.011.022h0l4.3-1.193.451-5.155H-7.955l-.321-4.018H1.418l.353-4.1H-13.018l-.321-3.937H5.993Z" transform="translate(0 0)"/>
        </g>
        </svg>`,
        width: 30.86,
        height: 36,
    },
]

export default languages