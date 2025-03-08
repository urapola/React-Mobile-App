import {
    View, 
    Text, 
    StyleSheet,    
    TouchableOpacity,
    Modal,
    TextInput,
  } from "react-native";

  const AddNoteModal = ({
    modalVisible,
    setModalVisible,
    newNote,
    setNewNote,
    addNote,
  }) => {
    return (
        <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={ ()=> setModalVisible (false)}        
      >      
       <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
           <Text style={styles.modalTitle}>Add a New Note</Text>
           <TextInput
           style={styles.input}
           placeholder="Enter note..."
           placeholderTextColor='#aaa'
           value={newNote}
           onChangeText={setNewNote}
           />
           <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={ () => setModalVisible(false)}>
               <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>    

            <TouchableOpacity style={styles.saveButton} onPress={addNote}>
               <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity> 

           </View>
        </View>
        </View> 
      </Modal>
    )
  };

   const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,        
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {       
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width:'80%'
      },
      modalTitle: {
        fontSize: 20,   
        fontWeight: 'bold',
        marginBottom:10,    
        textAlign:'center',
      },
      input:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:8,
        padding:10,
        fontSize:16,
        marginBottom:15,
      },
      cancelButton: {
        flex:1,        
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginRight:10,
        alignItems: 'center',
      },
      cancelButtonText: {
        color: '#333',
        fontSize: 16,        
      },
      saveButton: {
        flex:1,        
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,       
        alignItems: 'center',
      },
      saveButtonText: {
        color: '#fff',
        fontSize: 16,        
      },
   });

  export default AddNoteModal;