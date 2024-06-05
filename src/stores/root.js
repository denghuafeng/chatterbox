export const useRootStore = defineStore('root', {
  state: () => ({}),
  getters: {},
  actions: {
    /**
     * 新增消息
     * @param {*} conversation 
     */
    addMessage(conversation) {
      const { roomId, message } = conversation
      useConversationStore().addConversation(conversation)
      useRoomStore().addRoom(roomId, message)
    },
    /**
     * 新增未读消息
     * @param {*} conversation 
     */
    addUnreadMessage(conversation) {
      this.addMessage(conversation)
      useConversationStore().setUnread(conversation.id)
    },
    /**
     * 清除用户数据 用户信息
     * @param {*}
     */
    clearUserData() {
      useUserStore().clear()
    },
    /**
     * 清除所有数据
     * @param {*} param0
     */
    clearData() {
      this.clearUserData()
      useAuthStore().clear()
    }
  }
})
