#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import <UIKit/UIKit.h>
#import <CNPPopupController/CNPPopupController.h>

@interface RNBottomSheetTextView : NSObject<RCTBridgeModule>

@property (nonatomic, strong) CNPPopupController *popupController;

@end
  

