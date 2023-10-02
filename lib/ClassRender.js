"use strict";
class Render {
  static append(element, destination) {
    if (element && destination) {
      try {
        destination.append(element);
      } catch (error) {
        console.error(error);
      }
    }
  }

  static prepend(element, destination) {
    if (element && destination) {
      try {
        destination.prepend(element);
      } catch (error) {
        console.error(error);
      }
    }
  }

  static replace(elementNew, elementOld) {
    if (elementOld && elementNew) {
      try {
        elementOld.replaceWith(elementNew);
      } catch (error) {
        console.error(error);
      }
    }
  }

  static clearAndInsert(element, destination) {
    if (element && destination) {
      destination.innerHTML = "";
    }
    try {
      destination.append(element);
    } catch (error) {
      console.error(error);
    }
  }
}
