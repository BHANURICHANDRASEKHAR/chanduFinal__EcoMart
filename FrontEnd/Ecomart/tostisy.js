export function notifysuccess(toast,msg)
{
  toast.success(msg, {
    position: "bottom-left", 
    autoClose: 3000,      
    hideProgressBar: false, 
    closeOnClick: true,    
    pauseOnHover: true,
    fontSize:'20px',
    background:'green',
    color:'white',
   
  });
}
export function notifyerror(toast,msg)
{
    toast.error(msg, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
}
