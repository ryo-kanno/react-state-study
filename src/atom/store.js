import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
    key: "recoilPersist",
    // ストレージを変えることもできる
    // storage: sessionStorage
});

export const recoilCountState = atom({
    key: "recoilCount",
    default: 0,
})

// 永続化設定
export const persistCountState = atom({
    key: "persistCount",
    default: 0,
    effects_UNSTABLE: [persistAtom]
})