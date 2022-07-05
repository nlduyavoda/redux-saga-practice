import * as React from "react";
import "./index.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { videoImage, medias } from "../../util";
export default function Meidas() {
  function onDragEnd(selectedMedia: any) {
    if (!selectedMedia.destination) {
      return;
    }

    if (selectedMedia.destination.index === selectedMedia.source.index) {
      return;
    }
    const reorder = (medias: any, startIdx: any, endIdx: any) => {
      const [removed] = medias.splice(startIdx, 1);
      medias.splice(endIdx, 0, removed);
      return medias;
    };

    const result = reorder(
      medias,
      selectedMedia.source.index,
      selectedMedia.destination.index
    );
    console.log("result :>> ", result);
    // onChangeMedias("edit", quotes);
  }

  return (
    <div className="medias">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <>
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {medias?.map((media, idx) => (
                  <Draggable key={media.id} draggableId={media.id} index={idx}>
                    {(provided) => {
                      return (
                        <div
                          className="media"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="media-video">
                            <img src={videoImage} alt="media" />
                          </div>
                          <div className="media-infor">
                            information with id: {media.id}
                          </div>
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
              {/* {medias.map((media: any, idx: number) => {
                return (
                  <div className="media">
                    <div className="media-video">
                      <img src={videoImage} alt="media" />
                    </div>
                    <div className="media-infor">information</div>
                  </div>
                );
              })} */}
            </>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
