public class afisare{
   private String message;
    public String getMessage(){
        return this.message;
    }
    public void setMessage(String mesage){
    if(message!=null){
        this.message= message;
    } else{
        this.message ="Message is mising"
    }
}
}