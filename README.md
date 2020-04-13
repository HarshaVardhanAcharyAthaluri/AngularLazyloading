# AngularLazyloading
if module module not found error try below code snippet

loadChildren:()=>import('./inbox/inbox.module').then(im=>InboxModule)
