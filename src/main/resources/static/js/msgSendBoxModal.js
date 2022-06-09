containersendboxmsgmodal.innerHTML = `
 
<div class="modal fade" id="sendboxmsgmodal" tabindex="-1" aria-labelledby="lbl-sendboxmsg-modal" aria-hidden="true">
<div class="modal-dialog  modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <div> 
        <img id="img-sendboxmsg" src=""  width="100vw" 
        height="100vh" class="img-fluid rounded-start align-middle"  alt="item-interested"> 
       </div>
       <h5 class="modal-title ms-2" id="lbl-sendbox-producttitle"></h5> 
        
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    
     
      
    </div>
    <div class="modal-body">

      <!-- message box -->
       <div  id="alert2-id" class="alert alert-success collapse"    role="alert">
         
       </div>
       <!-- end of message box -->

       <!--form input -->
       <div id="form-id" class="show">
        <form>
            <input type="hidden" id="hid-sendbox-msgItem"></text>
          
            <div class="form-group row">
                <label for="lbl-sendbox-from" class="col-sm-2 col-form-label">From:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext" id="lbl-sendbox-from"   readonly value="">
                </div>
            </div>
            <div class="form-group row">
                <label for="lbl-sendbox-to" class="col-sm-2 col-form-label">To:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext" id="lbl-sendbox-to"  readonly value="">
                </div>
            </div>

            <div class="form-group">
                <label for="txt-sendbox-msg" class="form-label"></label>
                <textarea class="form-control" id="txt-sendbox-msg" rows="5"   placeholder="Message"></textarea>
            </div>

          </form>
          </div> <!--formid-->     
   
    <div class="modal-footer">
      <button id="btn-sendmsgbox" type="button" class="btn btn-primary  m-1 flex-fill"  
         >Send</button>
 
       <a id="btn-sendmsgMymsg" href='msgInbox.html' class='btn btn-primary m-1 flex-fill'>My Messages</a> 

       <a id="btn-sendmsglogin" href='login.html' class='btn btn-primary m-1 flex-fill'>Login</a> 

       <button id="btn-sendmsgclose" type="button" class="btn btn-primary  m-1 flex-fill" data-bs-dismiss="modal">Close</button>  

    </div>
   
  </div>
  
</div>
</div>
 


`