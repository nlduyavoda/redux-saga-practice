import * as React from "react";
import "./index.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MediasType } from "./type";
export default function Meidas({ onChange, mockMedias, onAdd }: any) {
  function onDragEnd(selectedMedia: any) {
    if (!selectedMedia.destination) {
      return;
    }

    if (selectedMedia.destination.index === selectedMedia.source.index) {
      return;
    }
    const reorder = (medias: any, startIdx: any, endIdx: any) => {
      const oldMedias = [...medias];
      const [removed] = oldMedias.splice(startIdx, 1);
      oldMedias.splice(endIdx, 0, removed);
      return oldMedias;
    };

    const result = reorder(
      mockMedias,
      selectedMedia.source.index,
      selectedMedia.destination.index
    );
    onChange(result);
  }
  return (
    <div className="medias">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <>
              <div
                className="dropable-medias"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {mockMedias.length ? (
                  mockMedias.map((media: MediasType, idx: any) => (
                    <Draggable
                      key={media.id}
                      draggableId={media.id}
                      index={idx}
                    >
                      {(provided) => {
                        return (
                          <div
                            className="media"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="media-video">
                              <img src={media.image} alt="media" />
                            </div>
                            <div className="media-infor">
                              information with id: {media.id}
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))
                ) : (
                  <EmptyMedias onAdd={onAdd} />
                )}
                {provided.placeholder}
              </div>
            </>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

const EmptyMedias = ({ onAdd }: any) => {
  return (
    <div className="empty-medias">
      <div className="btn-add-medias">
        <button onClick={onAdd}>add medias</button>
      </div>
    </div>
  );
};
