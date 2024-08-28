import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

DialogAnimate.propTypes = {
  sx: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  variants: PropTypes.object,
  title: PropTypes.string,
};

export default function DialogAnimate({ open =true ,title, variants, onClose, children, sx, ...other }) {
  return (
    <AnimatePresence>
      {open && (
         <Dialog
         open
         fullWidth
         maxWidth="md"
       >
         <div className="modal-header">
           {title && (
             <DialogTitle>
               {title}
               {onClose ? (
                 <IconButton
                   aria-label="close"
                   onClick={onClose}
                   sx={{
                     position: "absolute",
                     right: 8,
                     top: 8,
                   }}
                 >
                   X
                  </IconButton>
               ) : null}
             </DialogTitle>
           )}
         </div>
         <DialogContent className="add-doctor-form-details" sx={sx}>
           {children}
         </DialogContent>
       </Dialog>

      )}
    </AnimatePresence>
  );
}
