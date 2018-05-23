
package ui.bottomsheettextview;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

import prscx.bottomsheettextview.BottomSheetTextView;

public class RNBottomSheetTextViewModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNBottomSheetTextViewModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNBottomSheetTextView";
  }

  @ReactMethod
  public void Show(final ReadableMap props, final Callback onDone) {

    String title = props.getString("title");
    String description = props.getString("description");

    BottomSheetTextView.Builder builder = new BottomSheetTextView.Builder(getCurrentActivity());
    builder = builder.setTitle(title);
    builder = builder.setDescription(description);

    builder.show();
  }
}