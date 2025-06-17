'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useEditable } from './EditableContext'

export default function EditableToggleIcon( {path} : {path:any}) {
  const { isEditable, setIsEditable } = useEditable()
  console.log("this is the path", path , path != "/home");
  if ( path != "/home") {
    return (

        <span onClick={() => setIsEditable(!isEditable)} className="cursor-pointer">
        <FontAwesomeIcon
            icon={faEdit}
            className={isEditable ? 'text-green-400' : 'text-gray-400'}
            style={{ fontSize: '16px', width: '16px', height: '16px' }}
        />
        </span>
  )}
}
