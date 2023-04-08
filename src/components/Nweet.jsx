import { useState } from "react";
import { dbService } from "../fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import { storageService } from "../fbase";

const Nweet = ({ nweetObj, isOwner }) => {
    // edit
    const [editing, setEditing] = useState(false);
    // 기존 트윗이 초기에 보이게함
    const [newNweet, setNewNweet] = useState(nweetObj.nweet);

    //리터럴
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);

    // 삭제함수
    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        // 만약 삭제한다면
        if (ok) {
            // 삭제 진행
            await deleteDoc(NweetTextRef);
            if (nweetObj.attachmentUrl !== "") {
                // 첨부파일도 삭제 진행
                await deleteObject(ref(storageService, nweetObj.attachmentUrl));
            }
        }
    };

    // 수정 폼 불리언값 주기
    const toggleEditing = () => setEditing((prev) => !prev);

    // onchange 적용
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    };

    // onSubmit : 디비에 새 입력값 반영
    const onSubmit = async (event) => {
        event.preventDefault();
        // onSubmit : 디비에 새 입력값 반영
        await updateDoc(NweetTextRef, {
            nweet: newNweet,
        });
        // 다시 수정금지로!
        setEditing(false);
    };
    return (
        <div>
                    <h4>{nweetObj.title}</h4>
        </div>
    );
};

export default Nweet;
