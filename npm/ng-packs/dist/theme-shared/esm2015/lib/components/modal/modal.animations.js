/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeInDown, fadeOut } from '../../animations/fade.animations';
/** @type {?} */
export const backdropAnimation = trigger('backdrop', [
    transition(':enter', useAnimation(fadeIn)),
    transition(':leave', useAnimation(fadeOut)),
]);
/** @type {?} */
export const dialogAnimation = trigger('dialog', [
    transition(':enter', useAnimation(fadeInDown)),
    transition(':leave', useAnimation(fadeOut)),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRS9FLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFO0lBQ25ELFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzVDLENBQUM7O0FBRUYsTUFBTSxPQUFPLGVBQWUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO0lBQy9DLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc2l0aW9uLCB0cmlnZ2VyLCB1c2VBbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGZhZGVJbiwgZmFkZUluRG93biwgZmFkZU91dCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvZmFkZS5hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gdHJpZ2dlcignYmFja2Ryb3AnLCBbXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIHVzZUFuaW1hdGlvbihmYWRlSW4pKSxcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgdXNlQW5pbWF0aW9uKGZhZGVPdXQpKSxcbl0pO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nQW5pbWF0aW9uID0gdHJpZ2dlcignZGlhbG9nJywgW1xuICB0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oZmFkZUluRG93bikpLFxuICB0cmFuc2l0aW9uKCc6bGVhdmUnLCB1c2VBbmltYXRpb24oZmFkZU91dCkpLFxuXSk7XG4iXX0=