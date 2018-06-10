
#import "RNBottomSheetTextView.h"

@implementation RNBottomSheetTextView

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(Show:(NSDictionary *)props callback:(RCTResponseSenderBlock)callback) {
    CNPPopupController *pc = [self GenerateBottomSheet: props];
    [pc presentPopupControllerAnimated: YES];
}

- (CNPPopupController *) GenerateBottomSheet: (NSDictionary *)props {
    NSString *title = [props objectForKey: @"title"];
    NSNumber *titleSize = [props objectForKey: @"titleSize"];
    NSString *titleColor = [props objectForKey: @"titleColor"];
    
    NSString *description = [props objectForKey: @"description"];
    NSNumber *descriptionSize = [props objectForKey: @"descriptionSize"];
    NSString *descriptionColor = [props objectForKey: @"descriptionColor"];
    
    UIColor *titleClr = [RNBottomSheetTextView ColorFromHexCode: titleColor];
    UIColor *descriptionClr = [RNBottomSheetTextView ColorFromHexCode: descriptionColor];
    
    NSMutableParagraphStyle *paragraphStyle = NSMutableParagraphStyle.new;
//    paragraphStyle.lineBreakMode = NSLineBreakByWordWrapping;
    paragraphStyle.alignment = NSTextAlignmentLeft;

    NSAttributedString *titleStyle = [[NSAttributedString alloc] initWithString:title attributes:@{NSFontAttributeName : [UIFont boldSystemFontOfSize:[titleSize intValue]], NSParagraphStyleAttributeName : paragraphStyle}];

    UILabel *titleLabel = [[UILabel alloc] init];
    titleLabel.numberOfLines = 0;
    titleLabel.attributedText = titleStyle;
    titleLabel.textColor = titleClr;
    
    NSAttributedString *descriptionStyle = [[NSAttributedString alloc] initWithString:description attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:[descriptionSize intValue]], NSParagraphStyleAttributeName : paragraphStyle}];

    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width - 40, [UIScreen mainScreen].bounds.size.height / 2)];
    
    UIScrollView *scrollView = [UIScrollView new];
    scrollView.translatesAutoresizingMaskIntoConstraints = NO;
    [view addSubview:scrollView];

    UILabel *scrollViewLabel = [[UILabel alloc] init];
    scrollViewLabel.attributedText = descriptionStyle;
    scrollViewLabel.translatesAutoresizingMaskIntoConstraints = NO;
    scrollViewLabel.numberOfLines = 0;
    scrollViewLabel.textColor = descriptionClr;

    [scrollView addSubview:scrollViewLabel];
    
    /*** Auto Layout ***/
    
    NSDictionary *views = NSDictionaryOfVariableBindings(scrollView, scrollViewLabel);
    
    NSArray *scrollViewLabelConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"H:|[scrollViewLabel(scrollView)]" options:0 metrics:nil views:views];
    [scrollView addConstraints:scrollViewLabelConstraints];
    
    scrollViewLabelConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"V:|[scrollViewLabel]|" options:0 metrics:nil views:views];
    [scrollView addConstraints:scrollViewLabelConstraints];
//
    NSArray *scrollViewConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"H:|-[scrollView]-|" options:0 metrics:nil views:views];
    [view addConstraints:scrollViewConstraints];

    scrollViewConstraints = [NSLayoutConstraint constraintsWithVisualFormat:@"V:|-[scrollView]-|" options:0 metrics:nil views:views];
    [view addConstraints:scrollViewConstraints];

    
    self.popupController = [[CNPPopupController alloc] initWithContents:@[titleLabel, view]];
    self.popupController.theme = [CNPPopupTheme defaultTheme];
    self.popupController.theme.popupStyle = CNPPopupStyleActionSheet;
    self.popupController.theme.maxPopupWidth = [UIScreen mainScreen].bounds.size.width - 20;
    self.popupController.delegate = self;

    return self.popupController;
}

#pragma mark - CNPPopupController Delegate

- (void)popupController:(CNPPopupController *)controller didDismissWithButtonTitle:(NSString *)title {
    NSLog(@"Dismissed with button title: %@", title);
}

- (void)popupControllerDidPresent:(CNPPopupController *)controller {
    NSLog(@"Popup controller presented.");
}

+ (UIColor *) ColorFromHexCode:(NSString *)hexString {
    NSString *cleanString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    if([cleanString length] == 3) {
        cleanString = [NSString stringWithFormat:@"%@%@%@%@%@%@",
                       [cleanString substringWithRange:NSMakeRange(0, 1)],[cleanString substringWithRange:NSMakeRange(0, 1)],
                       [cleanString substringWithRange:NSMakeRange(1, 1)],[cleanString substringWithRange:NSMakeRange(1, 1)],
                       [cleanString substringWithRange:NSMakeRange(2, 1)],[cleanString substringWithRange:NSMakeRange(2, 1)]];
    }
    if([cleanString length] == 6) {
        cleanString = [cleanString stringByAppendingString:@"ff"];
    }
    
    unsigned int baseValue;
    [[NSScanner scannerWithString:cleanString] scanHexInt:&baseValue];
    
    float red = ((baseValue >> 24) & 0xFF)/255.0f;
    float green = ((baseValue >> 16) & 0xFF)/255.0f;
    float blue = ((baseValue >> 8) & 0xFF)/255.0f;
    float alpha = ((baseValue >> 0) & 0xFF)/255.0f;
    
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}


@end
  
