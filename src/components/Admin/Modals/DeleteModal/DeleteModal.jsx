import React from 'react'
import './delete-modal.css'
import { toast } from 'react-toastify';

const handleDeleteEntity = async (entityService, id) => {

    try {

        const response = await entityService.delete(id);
        toast.success("Silme işlemi başarılı.")
    } catch (error) {
        toast.error(error.response.data.message)
    }

}

function DeleteModal({ entityService, entityId }) {
    return (
        <div
            className="modal fade"
            id={entityId}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header delete-modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body delete-modal-body">
                        <div className="delete-modal-body-title">
                            {"Seçilen kaydı silmek istediğinize emin misiniz?"}
                        </div>
                        <div className="delete-modal-body-content">
                            Bu işlem geri alınamaz.
                        </div>
                    </div>
                    <div className="modal-footer delete-modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Hayır
                        </button>
                        <button type="button"
                            data-bs-dismiss="modal"
                            onClick={() => handleDeleteEntity(entityService, Number(entityId.replace(/.*-/, "")))} className="btn btn-primary">
                            Evet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal