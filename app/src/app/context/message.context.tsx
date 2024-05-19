import messageApi from "@/services/messages/messages.service"
import { FC, PropsWithChildren, createContext, useContext, useMemo } from "react"

export type MessageState = {

}

const MessageContext = createContext<MessageState | undefined>(undefined)

type MessageProviderProps = PropsWithChildren & {

}

export const MessageProvider: FC<MessageProviderProps> = ({children}: MessageProviderProps) => {
  const postMessage = async (message: string, parentId: string) => {
    const response = await messageApi.postMessage(message, parentId);
  };

  const value = useMemo(() => ({

  }), [])
  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};


const useMessages = (): MessageState => {
  const context = useContext(MessageContext);
  if(!context) {
    throw new Error("useMessages must be used within a MessageProvider")
  }
  return context
}

export default useMessages