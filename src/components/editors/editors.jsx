import style from './style.module.scss';
import android from "../../assets/logo-editeurs/android.svg";
import apple from "../../assets/logo-editeurs/apple.svg";
import ios from "../../assets/logo-editeurs/ios.svg";
import linux from "../../assets/logo-editeurs/linux.svg";
import nintendo from "../../assets/logo-editeurs/nintendo.svg";
import playstation from "../../assets/logo-editeurs/playstationPNG.png";
import windows from "../../assets/logo-editeurs/windows.svg";
import xbox from "../../assets/logo-editeurs/xbox.svg";

const editorsTable = [
    {
        name: "android", icone: android
    },
    {
        name: "mac", icone: apple
    },
    {
        name: "ios", icone: ios
    },
    {
        name: "linux", icone: linux
    },
    {
        name: "nintendo", icone: nintendo
    },
    {
        name: "playstation", icone: playstation
    },
    {
        name: "pc", icone: windows
    },
    {
        name: "xbox", icone: xbox
    }
];

export default function Editors({ games }) {
    return (
        <>
            {games.parent_platforms.map((editor) => {
                const editorName = editorsTable.find((obj) => obj.name === editor.platform.slug);
                const editorLogo = editorName ? editorName.icone : "";
                return (
                    <img
                        src={editorLogo}
                        alt=""
                        className={style.logoEditor}
                    />
                );
            })}
        </>
    )
}
