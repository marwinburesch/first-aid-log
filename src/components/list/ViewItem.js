import React from 'react';
import { KitLayout } from './KitLayout';
import Dialog from '../ModalDialog';
import { ReportLayout } from './ReportLayout';

export function ViewItem({ item, onClose }) {
  const layout = item.type;

  return (
    <Dialog onClose={onClose} blurCloseActive={true}>
      {layout === 'report' ? <ReportLayout report={item} /> : <> </>}
      {layout === 'kit' ? <KitLayout kit={item} /> : <> </>}
    </Dialog>
  );
}
